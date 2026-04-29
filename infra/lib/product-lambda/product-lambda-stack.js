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
    }
}
exports.ProductLambdaStack = ProductLambdaStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sYW1iZGEtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LWxhbWJkYS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBaUQ7QUFDakQsaURBQW1DO0FBQ25DLDJDQUE2QjtBQUM3Qix1RUFBeUQ7QUFFekQsbUVBQXFEO0FBQ3JELE1BQWEsa0JBQW1CLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDL0MsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FDaEQsSUFBSSxFQUNKLGVBQWUsRUFDZixVQUFVLENBQ1gsQ0FBQztRQUVGLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUM3QyxJQUFJLEVBQ0osWUFBWSxFQUNaLE9BQU8sQ0FDUixDQUFDO1FBRUYsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUN4QyxJQUFJLEVBQ0oseUJBQXlCLEVBQ3pCO1lBQ0UsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZELFdBQVcsRUFBRTtnQkFDWCxjQUFjLEVBQUUsVUFBVTtnQkFDMUIsV0FBVyxFQUFFLE9BQU87YUFDckI7U0FDRixDQUNGLENB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QUFFLElBQUk7cUJBQzNEO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3hCLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3ZDLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUM7U0FDOUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBeExELGdEQXdMQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGxhbWJkYSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWxhbWJkYVwiO1xyXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSBcImF3cy1jZGstbGliXCI7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0ICogYXMgYXBpR2F0ZXdheSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXlcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuaW1wb3J0ICogYXMgZHluYW1vZGIgZnJvbSBcImF3cy1jZGstbGliL2F3cy1keW5hbW9kYlwiO1xyXG5leHBvcnQgY2xhc3MgUHJvZHVjdExhbWJkYVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0c1RhYmxlID0gZHluYW1vZGIuVGFibGUuZnJvbVRhYmxlTmFtZShcclxuICAgICAgdGhpcyxcclxuICAgICAgXCJQcm9kdWN0c1RhYmxlXCIsXHJcbiAgICAgIFwiUHJvZHVjdHNcIixcclxuICAgICk7XHJcblxyXG4gICAgY29uc3Qgc3RvY2tUYWJsZSA9IGR5bmFtb2RiLlRhYmxlLmZyb21UYWJsZU5hbWUoXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIFwiU3RvY2tUYWJsZVwiLFxyXG4gICAgICBcInN0b2NrXCIsXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGdldFByb2R1Y3RMaXN0ID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcclxuICAgICAgdGhpcyxcclxuICAgICAgXCJnZXRQcm9kdWN0TGlzdEZ1Y25jdGlvblwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzIwX1gsXHJcbiAgICAgICAgbWVtb3J5U2l6ZTogMTAyNCxcclxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcyg1KSxcclxuICAgICAgICBoYW5kbGVyOiBcImhhbmRsZXIuZ2V0UHJvZHVjdExpc3RcIixcclxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgXCIuL1wiKSksXHJcbiAgICAgICAgZW52aXJvbm1lbnQ6IHtcclxuICAgICAgICAgIFBST0RVQ1RTX1RBQkxFOiBcIlByb2R1Y3RzXCIsXHJcbiAgICAgICAgICBTVE9DS19UQUJMRTogXCJzdG9ja1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHByb2R1Y3RzVGFibGUuZ3JhbnRSZWFkRGF0YShnZXRQcm9kdWN0TGlzdCk7XHJcbiAgICBzdG9ja1RhYmxlLmdyYW50UmVhZERhdGEoZ2V0UHJvZHVjdExpc3QpO1xyXG5cclxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlHYXRld2F5LlJlc3RBcGkodGhpcywgXCJwcm9kdWN0LWFwaS1nYXRld2F5XCIsIHtcclxuICAgICAgcmVzdEFwaU5hbWU6IFwiUHJvZHVjdCBBUEkgR2F0ZXdheVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJUaGlzIEFQSSBzZXJ2ZXMgdGhlIHByb2R1Y3QgbGFtYmRhIGZ1bmN0aW9ucy5cIixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFByb2R1Y3RMaXN0TGFtYmRhSW50ZWdyYXRpb24gPSBuZXcgYXBpR2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihcclxuICAgICAgZ2V0UHJvZHVjdExpc3QsXHJcbiAgICAgIHtcclxuICAgICAgICBpbnRlZ3JhdGlvblJlc3BvbnNlczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiBcIjIwMFwiLFxyXG4gICAgICAgICAgICByZXNwb25zZVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgICBcIm1ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6XHJcbiAgICAgICAgICAgICAgICBcIidodHRwOi8vbG9jYWxob3N0OjQyMDAnXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVGVtcGxhdGVzOiB7XHJcbiAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi9qc29uXCI6IFwiJGlucHV0Lmpzb24oJyQnKVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHByb3h5OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdFJlc291cmNlID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoXCJwcm9kdWN0c1wiKTtcclxuICAgIHByb2R1Y3RSZXNvdXJjZS5hZGRNZXRob2QoXCJHRVRcIiwgZ2V0UHJvZHVjdExpc3RMYW1iZGFJbnRlZ3JhdGlvbiwge1xyXG4gICAgICBtZXRob2RSZXNwb25zZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdGF0dXNDb2RlOiBcIjIwMFwiLFxyXG4gICAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIFwibWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2R1Y3RSZXNvdXJjZS5hZGRDb3JzUHJlZmxpZ2h0KHtcclxuICAgICAgYWxsb3dPcmlnaW5zOiBbXCJodHRwOi8vbG9jYWxob3N0OjQyMDBcIl0sXHJcbiAgICAgIGFsbG93TWV0aG9kczogW1wiR0VUXCJdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvZHVjdHNCeUlkID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcclxuICAgICAgdGhpcyxcclxuICAgICAgXCJnZXRQcm9kdWN0c0J5SWRGdWNuY3Rpb25cIixcclxuICAgICAge1xyXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxyXG4gICAgICAgIG1lbW9yeVNpemU6IDEwMjQsXHJcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoNSksXHJcbiAgICAgICAgaGFuZGxlcjogXCJoYW5kbGVyLmdldFByb2R1Y3RzQnlJZFwiLFxyXG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4vXCIpKSxcclxuICAgICAgICBlbnZpcm9ubWVudDoge1xyXG4gICAgICAgICAgUFJPRFVDVFNfVEFCTEU6IFwiUHJvZHVjdHNcIixcclxuICAgICAgICAgIFNUT0NLX1RBQkxFOiBcInN0b2NrXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgcHJvZHVjdHNUYWJsZS5ncmFudFJlYWREYXRhKGdldFByb2R1Y3RzQnlJZCk7XHJcbiAgICBzdG9ja1RhYmxlLmdyYW50UmVhZERhdGEoZ2V0UHJvZHVjdHNCeUlkKTtcclxuXHJcbiAgICBjb25zdCBnZXRQcm9kdWN0c0J5SWRMYW1iZGFJbnRlZ3JhdGlvbiA9IG5ldyBhcGlHYXRld2F5LkxhbWJkYUludGVncmF0aW9uKFxyXG4gICAgICBnZXRQcm9kdWN0c0J5SWQsXHJcbiAgICAgIHtcclxuICAgICAgICByZXF1ZXN0VGVtcGxhdGVzOiB7XHJcbiAgICAgICAgICBcImFwcGxpY2F0aW9uL2pzb25cIjogYHtcInByb2R1Y3RJZFwiOlwiJGlucHV0LnBhcmFtcygncHJvZHVjdElkJylcIn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW50ZWdyYXRpb25SZXNwb25zZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3RhdHVzQ29kZTogXCIyMDBcIixcclxuICAgICAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgXCJtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOlxyXG4gICAgICAgICAgICAgICAgXCInaHR0cDovL2xvY2FsaG9zdDo0MjAwJ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNwb25zZVRlbXBsYXRlczoge1xyXG4gICAgICAgICAgICAgIFwiYXBwbGljYXRpb24vanNvblwiOiBcIiRpbnB1dC5qc29uKCckJylcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwcm94eTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHByb2R1Y3RSZXNvdXJjZTIgPSBwcm9kdWN0UmVzb3VyY2UuYWRkUmVzb3VyY2UoXCJ7cHJvZHVjdElkfVwiKTtcclxuXHJcbiAgICBwcm9kdWN0UmVzb3VyY2UyLmFkZE1ldGhvZChcIkdFVFwiLCBnZXRQcm9kdWN0c0J5SWRMYW1iZGFJbnRlZ3JhdGlvbiwge1xyXG4gICAgICBtZXRob2RSZXNwb25zZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdGF0dXNDb2RlOiBcIjIwMFwiLFxyXG4gICAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIFwibWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vY3JlYXRlIHByb2R1Y3RcclxuICAgIGNvbnN0IGNyZWF0ZVByb2R1Y3QgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiY3JlYXRlUHJvZHVjdEZ1bmN0aW9uXCIsIHtcclxuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzIwX1gsXHJcbiAgICAgIG1lbW9yeVNpemU6IDEwMjQsXHJcbiAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDUpLFxyXG4gICAgICBoYW5kbGVyOiBcImhhbmRsZXIuY3JlYXRlUHJvZHVjdFwiLFxyXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgXCIuL1wiKSksXHJcbiAgICAgIGVudmlyb25tZW50OiB7XHJcbiAgICAgICAgUFJPRFVDVFNfVEFCTEU6IFwiUHJvZHVjdHNcIixcclxuICAgICAgICBTVE9DS19UQUJMRTogXCJzdG9ja1wiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvZHVjdHNUYWJsZS5ncmFudFdyaXRlRGF0YShjcmVhdGVQcm9kdWN0KTtcclxuICAgIHN0b2NrVGFibGUuZ3JhbnRXcml0ZURhdGEoY3JlYXRlUHJvZHVjdCk7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlUHJvZHVjdExhbWJkYUludGVncmF0aW9uID0gbmV3IGFwaUdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oXHJcbiAgICAgIGNyZWF0ZVByb2R1Y3QsXHJcbiAgICAgIHtcclxuICAgICAgICByZXF1ZXN0VGVtcGxhdGVzOiB7XHJcbiAgICAgICAgICBcImFwcGxpY2F0aW9uL2pzb25cIjogXCIkaW5wdXQuanNvbignJCcpXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnRlZ3JhdGlvblJlc3BvbnNlczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiBcIjIwMFwiLFxyXG4gICAgICAgICAgICByZXNwb25zZVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgICBcIm1ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6XHJcbiAgICAgICAgICAgICAgICBcIidodHRwOi8vbG9jYWxob3N0OjQyMDAnXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVGVtcGxhdGVzOiB7XHJcbiAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi9qc29uXCI6IFwiJGlucHV0LmJvZHlcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwcm94eTogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHByb2R1Y3RSZXNvdXJjZS5hZGRNZXRob2QoXCJQT1NUXCIsIGNyZWF0ZVByb2R1Y3RMYW1iZGFJbnRlZ3JhdGlvbiwge1xyXG4gICAgICBtZXRob2RSZXNwb25zZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzdGF0dXNDb2RlOiBcIjIwMFwiLFxyXG4gICAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgIFwibWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGFwaS5yb290LmFkZENvcnNQcmVmbGlnaHQoe1xyXG4gICAgICBhbGxvd09yaWdpbnM6IFtcImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMFwiXSxcclxuICAgICAgYWxsb3dNZXRob2RzOiBbXCJHRVRcIiwgXCJQT1NUXCJdLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==