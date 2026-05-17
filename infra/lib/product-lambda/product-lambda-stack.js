"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductLambdaStack = void 0;
const lambda = __importStar(require("aws-cdk-lib/aws-lambda"));
const cdk = __importStar(require("aws-cdk-lib"));
const path = __importStar(require("path"));
const apiGateway = __importStar(require("aws-cdk-lib/aws-apigateway"));
const dynamodb = __importStar(require("aws-cdk-lib/aws-dynamodb"));
const sqs = __importStar(require("aws-cdk-lib/aws-sqs"));
const aws_lambda_event_sources_1 = require("aws-cdk-lib/aws-lambda-event-sources");
const sns = __importStar(require("aws-cdk-lib/aws-sns"));
const subscriptions = __importStar(require("aws-cdk-lib/aws-sns-subscriptions"));
const import_stack_1 = require("./import-stack");
class ProductLambdaStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const productsTable = dynamodb.Table.fromTableName(this, "ProductsTable", "Products");
        const stockTable = dynamodb.Table.fromTableName(this, "StockTable", "stock");
        const getProductList = new lambda.Function(this, "getProductListFucnction", {
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: "handler.getProductList",
            code: lambda.Code.fromAsset(path.join(__dirname, "./")),
            environment: {
                PRODUCTS_TABLE: "Products",
                STOCK_TABLE: "stock",
            },
        });
        productsTable.grantReadData(getProductList);
        stockTable.grantReadData(getProductList);
        const api = new apiGateway.RestApi(this, "product-api-gateway", {
            restApiName: "Product API Gateway",
            description: "This API serves the product lambda functions.",
        });
        const getProductListLambdaIntegration = new apiGateway.LambdaIntegration(getProductList, {
            integrationResponses: [
                {
                    statusCode: "200",
                    responseParameters: {
                        "method.response.header.Access-Control-Allow-Origin": "'http://localhost:4200'",
                    },
                    responseTemplates: {
                        "application/json": "$input.json('$')",
                    },
                },
            ],
            proxy: false,
        });
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
        const getProductsById = new lambda.Function(this, "getProductsByIdFucnction", {
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: "handler.getProductsById",
            code: lambda.Code.fromAsset(path.join(__dirname, "./")),
            environment: {
                PRODUCTS_TABLE: "Products",
                STOCK_TABLE: "stock",
            },
        });
        productsTable.grantReadData(getProductsById);
        stockTable.grantReadData(getProductsById);
        const getProductsByIdLambdaIntegration = new apiGateway.LambdaIntegration(getProductsById, {
            requestTemplates: {
                "application/json": `{"productId":"$input.params('productId')"}`,
            },
            integrationResponses: [
                {
                    statusCode: "200",
                    responseParameters: {
                        "method.response.header.Access-Control-Allow-Origin": "'http://localhost:4200'",
                    },
                    responseTemplates: {
                        "application/json": "$input.json('$')",
                    },
                },
            ],
            proxy: false,
        });
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
        const createProductLambdaIntegration = new apiGateway.LambdaIntegration(createProduct, {
            requestTemplates: {
                "application/json": "$input.json('$')",
            },
            integrationResponses: [
                {
                    statusCode: "200",
                    responseParameters: {
                        "method.response.header.Access-Control-Allow-Origin": "'http://localhost:4200'",
                    },
                    responseTemplates: {
                        "application/json": "$input.body",
                    },
                },
            ],
            proxy: false,
        });
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
        //catalog-batch-process
        const catalogItemsQueue = new sqs.Queue(this, "catalogItemsQueue", {
            visibilityTimeout: cdk.Duration.seconds(30),
        });
        const createProductTopic = new sns.Topic(this, "createProductTopic", {
            topicName: "createProductTopic",
        });
        const catalogSQSLambdaFunction = new lambda.Function(this, "catalog-sqs-lambda", {
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: "handler.catalogSQS",
            code: lambda.Code.fromAsset(path.join(__dirname, "./")),
            environment: {
                PRODUCTS_TABLE: "Products",
                STOCK_TABLE: "stock",
                SNS_TOPIC_ARN: createProductTopic.topicArn,
            },
        });
        catalogSQSLambdaFunction.addEventSource(new aws_lambda_event_sources_1.SqsEventSource(catalogItemsQueue, {
            batchSize: 5,
            maxBatchingWindow: cdk.Duration.seconds(20),
        }));
        productsTable.grantReadWriteData(catalogSQSLambdaFunction);
        stockTable.grantReadWriteData(catalogSQSLambdaFunction);
        //SNS
        createProductTopic.addSubscription(new subscriptions.EmailSubscription("megha_rana@epam.com"));
        createProductTopic.grantPublish(catalogSQSLambdaFunction);
        new import_stack_1.ImportStack(this, "ImportS3tack", {
            queue: catalogItemsQueue,
        });
    }
}
exports.ProductLambdaStack = ProductLambdaStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sYW1iZGEtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LWxhbWJkYS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBaUQ7QUFDakQsaURBQW1DO0FBQ25DLDJDQUE2QjtBQUM3Qix1RUFBeUQ7QUFFekQsbUVBQXFEO0FBQ3JELHlEQUEyQztBQUMzQyxtRkFHOEM7QUFDOUMseURBQTJDO0FBQzNDLGlGQUFtRTtBQUNuRSxpREFBNkM7QUFDN0MsTUFBYSxrQkFBbUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMvQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUNoRCxJQUFJLEVBQ0osZUFBZSxFQUNmLFVBQVUsQ0FDWCxDQUFDO1FBRUYsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQzdDLElBQUksRUFDSixZQUFZLEVBQ1osT0FBTyxDQUNSLENBQUM7UUFFRixNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQ3hDLElBQUksRUFDSix5QkFBeUIsRUFDekI7WUFDRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxFQUFFLHdCQUF3QjtZQUNqQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkQsV0FBVyxF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QUNGLENBQ0YsQ0FBQztRQUVGLHdCQUF3QixDQUFDLGNBQWMsQ0FDckMsSUFBSSx5Q0FBYyxDQUFDLGlCQUFpQixFQUFFO1lBQ3BDLFNBQVMsRUFBRSxDQUFDO1lBQ1osaUJBQWlCLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQzVDLENBQUMsQ0FDSCxDQUFDO1FBRUYsYUFBYSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDM0QsVUFBVSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFeEQsS0FBSztRQUVMLGtCQUFrQixDQUFDLGVBQWUsQ0FDaEMsSUFBSSxhQUFhLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FDM0QsQ0FBQztRQUVGLGtCQUFrQixDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRTFELElBQUksMEJBQVcsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3BDLEtBQUssRUFBRSxpQkFBaUI7U0FDekIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBeE9ELGdEQXdPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxhbWJkYSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWxhbWJkYVwiO1xyXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSBcImF3cy1jZGstbGliXCI7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0ICogYXMgYXBpR2F0ZXdheSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXlcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuaW1wb3J0ICogYXMgZHluYW1vZGIgZnJvbSBcImF3cy1jZGstbGliL2F3cy1keW5hbW9kYlwiO1xyXG5pbXBvcnQgKiBhcyBzcXMgZnJvbSBcImF3cy1jZGstbGliL2F3cy1zcXNcIjtcclxuaW1wb3J0IHtcclxuICBTcXNFdmVudFNvdXJjZSxcclxuICBTbnNFdmVudFNvdXJjZSxcclxufSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWxhbWJkYS1ldmVudC1zb3VyY2VzXCI7XHJcbmltcG9ydCAqIGFzIHNucyBmcm9tIFwiYXdzLWNkay1saWIvYXdzLXNuc1wiO1xyXG5pbXBvcnQgKiBhcyBzdWJzY3JpcHRpb25zIGZyb20gXCJhd3MtY2RrLWxpYi9hd3Mtc25zLXN1YnNjcmlwdGlvbnNcIjtcclxuaW1wb3J0IHsgSW1wb3J0U3RhY2sgfSBmcm9tIFwiLi9pbXBvcnQtc3RhY2tcIjtcclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RMYW1iZGFTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdHNUYWJsZSA9IGR5bmFtb2RiLlRhYmxlLmZyb21UYWJsZU5hbWUoXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIFwiUHJvZHVjdHNUYWJsZVwiLFxyXG4gICAgICBcIlByb2R1Y3RzXCIsXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHN0b2NrVGFibGUgPSBkeW5hbW9kYi5UYWJsZS5mcm9tVGFibGVOYW1lKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICBcIlN0b2NrVGFibGVcIixcclxuICAgICAgXCJzdG9ja1wiLFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBnZXRQcm9kdWN0TGlzdCA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIFwiZ2V0UHJvZHVjdExpc3RGdWNuY3Rpb25cIixcclxuICAgICAge1xyXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxyXG4gICAgICAgIG1lbW9yeVNpemU6IDEwMjQsXHJcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoNSksXHJcbiAgICAgICAgaGFuZGxlcjogXCJoYW5kbGVyLmdldFByb2R1Y3RMaXN0XCIsXHJcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi9cIikpLFxyXG4gICAgICAgIGVudmlyb25tZW50OiB7XHJcbiAgICAgICAgICBQUk9EVUNUU19UQUJMRTogXCJQcm9kdWN0c1wiLFxyXG4gICAgICAgICAgU1RPQ0tfVEFCTEU6IFwic3RvY2tcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICBwcm9kdWN0c1RhYmxlLmdyYW50UmVhZERhdGEoZ2V0UHJvZHVjdExpc3QpO1xyXG4gICAgc3RvY2tUYWJsZS5ncmFudFJlYWREYXRhKGdldFByb2R1Y3RMaXN0KTtcclxuXHJcbiAgICBjb25zdCBhcGkgPSBuZXcgYXBpR2F0ZXdheS5SZXN0QXBpKHRoaXMsIFwicHJvZHVjdC1hcGktZ2F0ZXdheVwiLCB7XHJcbiAgICAgIHJlc3RBcGlOYW1lOiBcIlByb2R1Y3QgQVBJIEdhdGV3YXlcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBBUEkgc2VydmVzIHRoZSBwcm9kdWN0IGxhbWJkYSBmdW5jdGlvbnMuXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZXRQcm9kdWN0TGlzdExhbWJkYUludGVncmF0aW9uID0gbmV3IGFwaUdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oXHJcbiAgICAgIGdldFByb2R1Y3RMaXN0LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW50ZWdyYXRpb25SZXNwb25zZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdHVzQ29kZTogXCIyMDBcIixcclxuICAgICAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgXCJtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOlxyXG4gICAgICAgICAgICAgICAgXCInaHR0cDovL2xvY2FsaG9zdDo0MjAwJ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNwb25zZVRlbXBsYXRlczoge1xyXG4gICAgICAgICAgICAgIFwiYXBwbGljYXRpb24vanNvblwiOiBcIiRpbnB1dC5qc29uKCckJylcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwcm94eTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RSZXNvdXJjZSA9IGFwaS5yb290LmFkZFJlc291cmNlKFwicHJvZHVjdHNcIik7XHJcbiAgICBwcm9kdWN0UmVzb3VyY2UuYWRkTWV0aG9kKFwiR0VUXCIsIGdldFByb2R1Y3RMaXN0TGFtYmRhSW50ZWdyYXRpb24sIHtcclxuICAgICAgbWV0aG9kUmVzcG9uc2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3RhdHVzQ29kZTogXCIyMDBcIixcclxuICAgICAgICAgIHJlc3BvbnNlUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBcIm1ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9kdWN0UmVzb3VyY2UuYWRkQ29yc1ByZWZsaWdodCh7XHJcbiAgICAgIGFsbG93T3JpZ2luczogW1wiaHR0cDovL2xvY2FsaG9zdDo0MjAwXCJdLFxyXG4gICAgICBhbGxvd01ldGhvZHM6IFtcIkdFVFwiXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFByb2R1Y3RzQnlJZCA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIFwiZ2V0UHJvZHVjdHNCeUlkRnVjbmN0aW9uXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjBfWCxcclxuICAgICAgICBtZW1vcnlTaXplOiAxMDI0LFxyXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDUpLFxyXG4gICAgICAgIGhhbmRsZXI6IFwiaGFuZGxlci5nZXRQcm9kdWN0c0J5SWRcIixcclxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgXCIuL1wiKSksXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IHtcclxuICAgICAgICAgIFBST0RVQ1RTX1RBQkxFOiBcIlByb2R1Y3RzXCIsXHJcbiAgICAgICAgICBTVE9DS19UQUJMRTogXCJzdG9ja1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHByb2R1Y3RzVGFibGUuZ3JhbnRSZWFkRGF0YShnZXRQcm9kdWN0c0J5SWQpO1xyXG4gICAgc3RvY2tUYWJsZS5ncmFudFJlYWREYXRhKGdldFByb2R1Y3RzQnlJZCk7XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvZHVjdHNCeUlkTGFtYmRhSW50ZWdyYXRpb24gPSBuZXcgYXBpR2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihcclxuICAgICAgZ2V0UHJvZHVjdHNCeUlkLFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVxdWVzdFRlbXBsYXRlczoge1xyXG4gICAgICAgICAgXCJhcHBsaWNhdGlvbi9qc29uXCI6IGB7XCJwcm9kdWN0SWRcIjpcIiRpbnB1dC5wYXJhbXMoJ3Byb2R1Y3RJZCcpXCJ9YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGludGVncmF0aW9uUmVzcG9uc2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IFwiMjAwXCIsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICAgIFwibWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjpcclxuICAgICAgICAgICAgICAgIFwiJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMCdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzcG9uc2VUZW1wbGF0ZXM6IHtcclxuICAgICAgICAgICAgICBcImFwcGxpY2F0aW9uL2pzb25cIjogXCIkaW5wdXQuanNvbignJCcpXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcHJveHk6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0UmVzb3VyY2UyID0gcHJvZHVjdFJlc291cmNlLmFkZFJlc291cmNlKFwie3Byb2R1Y3RJZH1cIik7XHJcblxyXG4gICAgcHJvZHVjdFJlc291cmNlMi5hZGRNZXRob2QoXCJHRVRcIiwgZ2V0UHJvZHVjdHNCeUlkTGFtYmRhSW50ZWdyYXRpb24sIHtcclxuICAgICAgbWV0aG9kUmVzcG9uc2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3RhdHVzQ29kZTogXCIyMDBcIixcclxuICAgICAgICAgIHJlc3BvbnNlUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBcIm1ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2NyZWF0ZSBwcm9kdWN0XHJcbiAgICBjb25zdCBjcmVhdGVQcm9kdWN0ID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcImNyZWF0ZVByb2R1Y3RGdW5jdGlvblwiLCB7XHJcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxyXG4gICAgICBtZW1vcnlTaXplOiAxMDI0LFxyXG4gICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcyg1KSxcclxuICAgICAgaGFuZGxlcjogXCJoYW5kbGVyLmNyZWF0ZVByb2R1Y3RcIixcclxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi9cIikpLFxyXG4gICAgICBlbnZpcm9ubWVudDoge1xyXG4gICAgICAgIFBST0RVQ1RTX1RBQkxFOiBcIlByb2R1Y3RzXCIsXHJcbiAgICAgICAgU1RPQ0tfVEFCTEU6IFwic3RvY2tcIixcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2R1Y3RzVGFibGUuZ3JhbnRXcml0ZURhdGEoY3JlYXRlUHJvZHVjdCk7XHJcbiAgICBzdG9ja1RhYmxlLmdyYW50V3JpdGVEYXRhKGNyZWF0ZVByb2R1Y3QpO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZVByb2R1Y3RMYW1iZGFJbnRlZ3JhdGlvbiA9IG5ldyBhcGlHYXRld2F5LkxhbWJkYUludGVncmF0aW9uKFxyXG4gICAgICBjcmVhdGVQcm9kdWN0LFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVxdWVzdFRlbXBsYXRlczoge1xyXG4gICAgICAgICAgXCJhcHBsaWNhdGlvbi9qc29uXCI6IFwiJGlucHV0Lmpzb24oJyQnKVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW50ZWdyYXRpb25SZXNwb25zZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdHVzQ29kZTogXCIyMDBcIixcclxuICAgICAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgXCJtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOlxyXG4gICAgICAgICAgICAgICAgXCInaHR0cDovL2xvY2FsaG9zdDo0MjAwJ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNwb25zZVRlbXBsYXRlczoge1xyXG4gICAgICAgICAgICAgIFwiYXBwbGljYXRpb24vanNvblwiOiBcIiRpbnB1dC5ib2R5XCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcHJveHk6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICBwcm9kdWN0UmVzb3VyY2UuYWRkTWV0aG9kKFwiUE9TVFwiLCBjcmVhdGVQcm9kdWN0TGFtYmRhSW50ZWdyYXRpb24sIHtcclxuICAgICAgbWV0aG9kUmVzcG9uc2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3RhdHVzQ29kZTogXCIyMDBcIixcclxuICAgICAgICAgIHJlc3BvbnNlUGFyYW1ldGVyczoge1xyXG4gICAgICAgICAgICBcIm1ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBhcGkucm9vdC5hZGRDb3JzUHJlZmxpZ2h0KHtcclxuICAgICAgYWxsb3dPcmlnaW5zOiBbXCJodHRwOi8vbG9jYWxob3N0OjQyMDBcIl0sXHJcbiAgICAgIGFsbG93TWV0aG9kczogW1wiR0VUXCIsIFwiUE9TVFwiXSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY2F0YWxvZy1iYXRjaC1wcm9jZXNzXHJcblxyXG4gICAgY29uc3QgY2F0YWxvZ0l0ZW1zUXVldWUgPSBuZXcgc3FzLlF1ZXVlKHRoaXMsIFwiY2F0YWxvZ0l0ZW1zUXVldWVcIiwge1xyXG4gICAgICB2aXNpYmlsaXR5VGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzApLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBjcmVhdGVQcm9kdWN0VG9waWMgPSBuZXcgc25zLlRvcGljKHRoaXMsIFwiY3JlYXRlUHJvZHVjdFRvcGljXCIsIHtcclxuICAgICAgdG9waWNOYW1lOiBcImNyZWF0ZVByb2R1Y3RUb3BpY1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2F0YWxvZ1NRU0xhbWJkYUZ1bmN0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcclxuICAgICAgdGhpcyxcclxuICAgICAgXCJjYXRhbG9nLXNxcy1sYW1iZGFcIixcclxuICAgICAge1xyXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxyXG4gICAgICAgIG1lbW9yeVNpemU6IDEwMjQsXHJcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoNSksXHJcbiAgICAgICAgaGFuZGxlcjogXCJoYW5kbGVyLmNhdGFsb2dTUVNcIixcclxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgXCIuL1wiKSksXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IHtcclxuICAgICAgICAgIFBST0RVQ1RTX1RBQkxFOiBcIlByb2R1Y3RzXCIsXHJcbiAgICAgICAgICBTVE9DS19UQUJMRTogXCJzdG9ja1wiLFxyXG4gICAgICAgICAgU05TX1RPUElDX0FSTjogY3JlYXRlUHJvZHVjdFRvcGljLnRvcGljQXJuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIGNhdGFsb2dTUVNMYW1iZGFGdW5jdGlvbi5hZGRFdmVudFNvdXJjZShcclxuICAgICAgbmV3IFNxc0V2ZW50U291cmNlKGNhdGFsb2dJdGVtc1F1ZXVlLCB7XHJcbiAgICAgICAgYmF0Y2hTaXplOiA1LFxyXG4gICAgICAgIG1heEJhdGNoaW5nV2luZG93OiBjZGsuRHVyYXRpb24uc2Vjb25kcygyMCksXHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuXHJcbiAgICBwcm9kdWN0c1RhYmxlLmdyYW50UmVhZFdyaXRlRGF0YShjYXRhbG9nU1FTTGFtYmRhRnVuY3Rpb24pO1xyXG4gICAgc3RvY2tUYWJsZS5ncmFudFJlYWRXcml0ZURhdGEoY2F0YWxvZ1NRU0xhbWJkYUZ1bmN0aW9uKTtcclxuXHJcbiAgICAvL1NOU1xyXG5cclxuICAgIGNyZWF0ZVByb2R1Y3RUb3BpYy5hZGRTdWJzY3JpcHRpb24oXHJcbiAgICAgIG5ldyBzdWJzY3JpcHRpb25zLkVtYWlsU3Vic2NyaXB0aW9uKFwibWVnaGFfcmFuYUBlcGFtLmNvbVwiKSxcclxuICAgICk7XHJcblxyXG4gICAgY3JlYXRlUHJvZHVjdFRvcGljLmdyYW50UHVibGlzaChjYXRhbG9nU1FTTGFtYmRhRnVuY3Rpb24pO1xyXG5cclxuICAgIG5ldyBJbXBvcnRTdGFjayh0aGlzLCBcIkltcG9ydFMzdGFja1wiLCB7XHJcbiAgICAgIHF1ZXVlOiBjYXRhbG9nSXRlbXNRdWV1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=