import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as congnito from "aws-cdk-lib/aws-cognito";
import * as path from "path";

export class AuthorizerDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const AuthorizationDemolambdaFunction = new lambda.Function(
      this,
      "lambda-authorization-demo-function",
      {
        runtime: lambda.Runtime.NODEJS_20_X,
        memorySize: 1024,
        timeout: cdk.Duration.seconds(5),
        handler: "handler.authorizationDemo",
        code: lambda.Code.fromAsset(path.join(__dirname, "./")),
      },
    );

    // authorization implementation

    const userPool = new congnito.UserPool(
      this,
      "authorization-demo-user-pool",
      {
        signInAliases: {
          email: true,
        },
        autoVerify: {
          email: true,
        },
        standardAttributes: {
          familyName: {
            mutable: true,
            required: true,
          },
          phoneNumber: {
            required: false,
          },
        },
        customAttributes: {
          createdAt: new congnito.DateTimeAttribute(),
        },
        passwordPolicy: {
          minLength: 8,
          requireLowercase: true,
          requireUppercase: false,
          requireDigits: true,
          requireSymbols: false,
        },
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      },
    );

    const userPoolClient = userPool.addClient(
      "authorization-demo-userpool-client",
      {
        userPoolClientName: "authorization-demo-userpool-client",
        authFlows: {
          userPassword: true,
        },
      },
    );

    const userPoolDomain = userPool.addDomain("Domain", {
      cognitoDomain: {
        domainPrefix: "authorization",
      },
    });

    const api = new apigateway.RestApi(this, "authorization-demo", {
      restApiName: "Authorization Demo",
      description:
        "This API serves the Lambda functions for authorization demo.",
    });

    const demoAuthorizer = new apigateway.CognitoUserPoolsAuthorizer(
      this,
      "demo-authorizer",
      {
        authorizerName: "demo-authorizer",
        cognitoUserPools: [userPool], // Connect using the User Pool
      },
    );

    const authorizationDemoLambdaIntegration = new apigateway.LambdaIntegration(
      AuthorizationDemolambdaFunction,
      {
        requestTemplates: {
          "application/json": `{ "message": "$input.params('message')" }`,
        },
        integrationResponses: [
          {
            statusCode: "200",
          },
        ],
        proxy: false,
      },
    );

    const authorizationDemoResourse =
      api.root.addResource("authorization-demo");

    authorizationDemoResourse.addMethod(
      "GET",
      authorizationDemoLambdaIntegration,
      {
        methodResponses: [{ statusCode: "200" }],
        authorizer: demoAuthorizer,
      },
    );
  }
}
