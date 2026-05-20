import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as path from "path";
import * as apiGateway from "aws-cdk-lib/aws-apigateway";
import * as s3n from "aws-cdk-lib/aws-s3-notifications";
import * as sqs from "aws-cdk-lib/aws-sqs";

export class ImportStack extends cdk.Stack {
  constructor(
    scope: Construct,
    id: string,
    props: cdk.StackProps & { queue: sqs.Queue },
  ) {
    super(scope, id, props);

    const importBucket = new s3.Bucket(this, "ImportBucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      cors: [
        {
          allowedMethods: [
            s3.HttpMethods.GET,
            s3.HttpMethods.PUT,
            s3.HttpMethods.POST,
          ],
          allowedOrigins: ["http://localhost:4200"],
          allowedHeaders: ["*"],
        },
      ],
    });

    new s3deploy.BucketDeployment(this, "createUploadFolder", {
      destinationBucket: importBucket,
      sources: [s3deploy.Source.data("uploaded/", "")],
    });

    const importProductsFile = new lambda.Function(this, "importProductsFile", {
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      handler: "handler.importProductsFile",
      code: lambda.Code.fromAsset(path.join(__dirname, "./")),
      environment: {
        BUCKET: importBucket.bucketName,
      },
    });

    importBucket.grantReadWrite(importProductsFile);
    // productsTable.grantReadData(getProductList);
    // stockTable.grantReadData(getProductList);

    //import

    // const catalogItemsQueue = new sqs.Queue(this, "catalogItemsQueue", {
    //   visibilityTimeout: cdk.Duration.seconds(30),
    // });

    const importFileParser = new lambda.Function(this, "importFileParser", {
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 1024,
      timeout: cdk.Duration.minutes(1),
      handler: "handler.importFileParser",
      code: lambda.Code.fromAsset(path.join(__dirname, "./")),
      environment: {
        BUCKET: importBucket.bucketName,
        SQS_URL: props.queue.queueUrl,
      },
    });

    importBucket.grantRead(importFileParser);
    importBucket.addEventNotification(
      s3.EventType.OBJECT_CREATED,
      new s3n.LambdaDestination(importFileParser),
      {
        prefix: "uploaded/",
      },
    );
    props.queue.grantSendMessages(importFileParser);

    const basicAuthorizerLambda = lambda.Function.fromFunctionName(
      this,
      "basicAuthorizerLambda",
      "basicAuthorizer",
    );

    const authorizer = new apiGateway.TokenAuthorizer(
      this,
      "importAuthorizer",
      {
        handler: basicAuthorizerLambda,
      },
    );

    const api = new apiGateway.RestApi(this, "import-product-api-gateway", {
      restApiName: "Import Product API Gateway",
      description: "This API serves the import product lambda functions.",
    });

    const getImportProductLambdaIntegration = new apiGateway.LambdaIntegration(
      importProductsFile,
    );

    const importProductResource = api.root.addResource("import");

    importProductResource.addCorsPreflight({
      allowOrigins: ["http://localhost:4200"],
      allowMethods: ["GET", "OPTIONS"],
      allowHeaders: ["*"],
    });

    importProductResource.addMethod("GET", getImportProductLambdaIntegration, {
      authorizer,
      authorizationType: apiGateway.AuthorizationType.CUSTOM,
    });

    api.root.addCorsPreflight({
      allowOrigins: ["http://localhost:4200"],
      allowMethods: ["GET", "POST", "OPTIONS"],
      allowHeaders: ["*"],
    });
  }
}
