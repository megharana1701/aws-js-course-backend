import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cdk from 'aws-cdk-lib';
import * as path from 'path';
import * as apiGateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';
export class ProductLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const getProductList = new lambda.Function(
      this,
      'getProductListFucnction',
      {
        runtime: lambda.Runtime.NODEJS_20_X,
        memorySize: 1024,
        timeout: cdk.Duration.seconds(5),
        handler: 'handler.getProductList',
        code: lambda.Code.fromAsset(path.join(__dirname, './')),
      },
    );

    const api = new apiGateway.RestApi(this, 'product-api-gateway', {
      restApiName: 'Product API Gateway',
      description: 'This API serves the product lambda functions.',
    });

    const getProductListLambdaIntegration = new apiGateway.LambdaIntegration(
      getProductList,
      {
        integrationResponses: [
          {
            statusCode: '200',
            responseParameters: {
              'method.response.header.Access-Control-Allow-Origin':
                "'http://localhost:4200'",
            },
            responseTemplates: {
              'application/json': "$input.json('$')",
            },
          },
        ],
        proxy: false,
      },
    );

    const productResource = api.root.addResource('products');
    productResource.addMethod('GET', getProductListLambdaIntegration, {
      methodResponses: [
        {
          statusCode: '200',
          responseParameters: {
            'method.response.header.Access-Control-Allow-Origin': true,
          },
        },
      ],
    });

    productResource.addCorsPreflight({
      allowOrigins: ['http://localhost:4200'],
      allowMethods: ['GET'],
    });

    const getProductsById = new lambda.Function(
      this,
      'getProductsByIdFucnction',
      {
        runtime: lambda.Runtime.NODEJS_20_X,
        memorySize: 1024,
        timeout: cdk.Duration.seconds(5),
        handler: 'handler.getProductsById',
        code: lambda.Code.fromAsset(path.join(__dirname, './')),
      },
    );

    const getProductsByIdLambdaIntegration = new apiGateway.LambdaIntegration(
      getProductsById,
      {
        requestTemplates: {
          'application/json': `{"productId":"$input.params('productId')"}`,
        },
        integrationResponses: [
          {
            statusCode: '200',
            responseParameters: {
              'method.response.header.Access-Control-Allow-Origin':
                "'http://localhost:4200'",
            },
            responseTemplates: {
              'application/json': "$input.json('$')",
            },
          },
        ],
        proxy: false,
      },
    );

    const productResource2 = productResource.addResource('{productId}');

    productResource2.addMethod('GET', getProductsByIdLambdaIntegration, {
      methodResponses: [
        {
          statusCode: '200',
          responseParameters: {
            'method.response.header.Access-Control-Allow-Origin': true,
          },
        },
      ],
    });

    api.root.addCorsPreflight({
      allowOrigins: ['http://localhost:4200'],
      allowMethods: ['GET'],
    });
  }
}
