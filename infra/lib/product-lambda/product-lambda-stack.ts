import * as lambda from "aws-cdk-lib/aws-lambda";
import * as cdk from "aws-cdk-lib";
import * as path from "path";
import * as apiGateway from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
export class ProductLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const productsTable = dynamodb.Table.fromTableName(
      this,
      "ProductsTable",
      "Products",
    );

    const stockTable = dynamodb.Table.fromTableName(
      this,
      "StockTable",
      "stock",
    );

    const getProductList = new lambda.Function(
      this,
      "getProductListFucnction",
      {
        runtime: lambda.Runtime.NODEJS_20_X,
        memorySize: 1024,
        timeout: cdk.Duration.seconds(5),
        handler: "handler.getProductList",
        code: lambda.Code.fromAsset(path.join(__dirname, "./")),
        environment: {
          PRODUCTS_TABLE: "Products",
          STOCK_TABLE: "stock",
        },
      },
    );

    productsTable.grantReadData(getProductList);
    stockTable.grantReadData(getProductList);

    const api = new apiGateway.RestApi(this, "product-api-gateway", {
      restApiName: "Product API Gateway",
      description: "This API serves the product lambda functions.",
    });

    const getProductListLambdaIntegration = new apiGateway.LambdaIntegration(
      getProductList,
      {
        integrationResponses: [
          {
            statusCode: "200",
            responseParameters: {
              "method.response.header.Access-Control-Allow-Origin":
                "'http://localhost:4200'",
            },
            responseTemplates: {
              "application/json": "$input.json('$')",
            },
          },
        ],
        proxy: false,
      },
    );

    const productResource = api.root.addResource("products");
    productResource.addMethod("GET", getProductListLambdaIntegration, {
      methodResponses: [
        {
          statusCode: "200",
          responseParameters: {
            "method.response.header.Access-Control-Allow-Origin": true,
          },
        },
      ],
    });

    productResource.addCorsPreflight({
      allowOrigins: ["http://localhost:4200"],
      allowMethods: ["GET"],
    });

    const getProductsById = new lambda.Function(
      this,
      "getProductsByIdFucnction",
      {
        runtime: lambda.Runtime.NODEJS_20_X,
        memorySize: 1024,
        timeout: cdk.Duration.seconds(5),
        handler: "handler.getProductsById",
        code: lambda.Code.fromAsset(path.join(__dirname, "./")),
        environment: {
          PRODUCTS_TABLE: "Products",
          STOCK_TABLE: "stock",
        },
      },
    );

    productsTable.grantReadData(getProductsById);
    stockTable.grantReadData(getProductsById);

    const getProductsByIdLambdaIntegration = new apiGateway.LambdaIntegration(
      getProductsById,
      {
        requestTemplates: {
          "application/json": `{"productId":"$input.params('productId')"}`,
        },
        integrationResponses: [
          {
            statusCode: "200",
            responseParameters: {
              "method.response.header.Access-Control-Allow-Origin":
                "'http://localhost:4200'",
            },
            responseTemplates: {
              "application/json": "$input.json('$')",
            },
          },
        ],
        proxy: false,
      },
    );

    const productResource2 = productResource.addResource("{productId}");

    productResource2.addMethod("GET", getProductsByIdLambdaIntegration, {
      methodResponses: [
        {
          statusCode: "200",
          responseParameters: {
            "method.response.header.Access-Control-Allow-Origin": true,
          },
        },
      ],
    });

    //create product
    const createProduct = new lambda.Function(this, "createProductFunction", {
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      handler: "handler.createProduct",
      code: lambda.Code.fromAsset(path.join(__dirname, "./")),
      environment: {
        PRODUCTS_TABLE: "Products",
        STOCK_TABLE: "stock",
      },
    });

    productsTable.grantWriteData(createProduct);
    stockTable.grantWriteData(createProduct);

    const createProductLambdaIntegration = new apiGateway.LambdaIntegration(
      createProduct,
      {
        requestTemplates: {
          "application/json": "$input.json('$')",
        },
        integrationResponses: [
          {
            statusCode: "200",
            responseParameters: {
              "method.response.header.Access-Control-Allow-Origin":
                "'http://localhost:4200'",
            },
            responseTemplates: {
              "application/json": "$input.body",
            },
          },
        ],
        proxy: false,
      },
    );

    productResource.addMethod("POST", createProductLambdaIntegration, {
      methodResponses: [
        {
          statusCode: "200",
          responseParameters: {
            "method.response.header.Access-Control-Allow-Origin": true,
          },
        },
      ],
    });

    api.root.addCorsPreflight({
      allowOrigins: ["http://localhost:4200"],
      allowMethods: ["GET", "POST"],
    });
  }
}
