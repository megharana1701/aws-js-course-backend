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
class ProductLambdaStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const getProductList = new lambda.Function(this, 'getProductListFucnction', {
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: 'handler.getProductList',
            code: lambda.Code.fromAsset(path.join(__dirname, './')),
        });
        const api = new apiGateway.RestApi(this, 'product-api-gateway', {
            restApiName: 'Product API Gateway',
            description: 'This API serves the product lambda functions.',
        });
        const getProductListLambdaIntegration = new apiGateway.LambdaIntegration(getProductList, {
            integrationResponses: [
                {
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Origin': "'http://localhost:4200'",
                    },
                    responseTemplates: {
                        'application/json': "$input.json('$')",
                    },
                },
            ],
            proxy: false,
        });
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
        const getProductsById = new lambda.Function(this, 'getProductsByIdFucnction', {
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: 'handler.getProductsById',
            code: lambda.Code.fromAsset(path.join(__dirname, './')),
        });
        const getProductsByIdLambdaIntegration = new apiGateway.LambdaIntegration(getProductsById, {
            requestTemplates: {
                'application/json': `{"productId":"$input.params('productId')"}`,
            },
            integrationResponses: [
                {
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Origin': "'http://localhost:4200'",
                    },
                    responseTemplates: {
                        'application/json': "$input.json('$')",
                    },
                },
            ],
            proxy: false,
        });
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
exports.ProductLambdaStack = ProductLambdaStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sYW1iZGEtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LWxhbWJkYS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBaUQ7QUFDakQsaURBQW1DO0FBQ25DLDJDQUE2QjtBQUM3Qix1RUFBeUQ7QUFFekQsTUFBYSxrQkFBbUIsU0FBUSxHQUFHLENBQUMsS0FBSztJQUMvQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sY0FBYyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FDeEMsSUFBSSxFQUNKLHlCQUF5QixFQUN6QjtZQUNFLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNoQyxPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN4RCxDQUNGLENBQUM7UUFFRixNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQzlELFdBQVcsRUFBRSxxQkFBcUI7WUFDbEMsV0FBVyxFQUFFLCtDQUErQztTQUM3RCxDQUFDLENBQUM7UUFFSCxNQUFNLCtCQUErQixHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUN0RSxjQUFjLEVBQ2Q7WUFDRSxvQkFBb0IsRUFBRTtnQkFDcEI7b0JBQ0UsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLGtCQUFrQixFQUFFO3dCQUNsQixvREFBb0QsRUFDbEQseUJBQXlCO3FCQUM1QjtvQkFDRCxpQkFBaUIsRUFBRTt3QkFDakIsa0JBQWtCLEVBQUUsa0JBQWtCO3FCQUN2QztpQkFDRjthQUNGO1lBQ0QsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUNGLENBQUM7UUFFRixNQUFNLGVBQWUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RCxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSwrQkFBK0IsRUFBRTtZQUNoRSxlQUFlLEVBQUU7Z0JBQ2Y7b0JBQ0UsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLGtCQUFrQixFQUFFO3dCQUNsQixvREFBb0QsRUFBRSxJQUFJO3FCQUMzRDtpQkFDRjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsZUFBZSxDQUFDLGdCQUFnQixDQUFDO1lBQy9CLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3ZDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztTQUN0QixDQUFDLENBQUM7UUFFSCxNQUFNLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQ3pDLElBQUksRUFDSiwwQkFBMEIsRUFDMUI7WUFDRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxFQUFFLHlCQUF5QjtZQUNsQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDeEQsQ0FDRixDQUFDO1FBRUYsTUFBTSxnQ0FBZ0MsR0FBRyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FDdkUsZUFBZSxFQUNmO1lBQ0UsZ0JBQWdCLEVBQUU7Z0JBQ2hCLGtCQUFrQixFQUFFLDRDQUE0QzthQUNqRTtZQUNELG9CQUFvQixFQUFFO2dCQUNwQjtvQkFDRSxVQUFVLEVBQUUsS0FBSztvQkFDakIsa0JBQWtCLEVBQUU7d0JBQ2xCLG9EQUFvRCxFQUNsRCx5QkFBeUI7cUJBQzVCO29CQUNELGlCQUFpQixFQUFFO3dCQUNqQixrQkFBa0IsRUFBRSxrQkFBa0I7cUJBQ3ZDO2lCQUNGO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsS0FBSztTQUNiLENBQ0YsQ0FBQztRQUVGLE1BQU0sZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVwRSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLGdDQUFnQyxFQUFFO1lBQ2xFLGVBQWUsRUFBRTtnQkFDZjtvQkFDRSxVQUFVLEVBQUUsS0FBSztvQkFDakIsa0JBQWtCLEVBQUU7d0JBQ2xCLG9EQUFvRCxFQUFFLElBQUk7cUJBQzNEO2lCQUNGO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3hCLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3ZDLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQztTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUE3R0QsZ0RBNkdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xyXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgKiBhcyBhcGlHYXRld2F5IGZyb20gJ2F3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5JztcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGFtYmRhU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xyXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IGdldFByb2R1Y3RMaXN0ID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcclxuICAgICAgdGhpcyxcclxuICAgICAgJ2dldFByb2R1Y3RMaXN0RnVjbmN0aW9uJyxcclxuICAgICAge1xyXG4gICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxyXG4gICAgICAgIG1lbW9yeVNpemU6IDEwMjQsXHJcbiAgICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoNSksXHJcbiAgICAgICAgaGFuZGxlcjogJ2hhbmRsZXIuZ2V0UHJvZHVjdExpc3QnLFxyXG4gICAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi8nKSksXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlHYXRld2F5LlJlc3RBcGkodGhpcywgJ3Byb2R1Y3QtYXBpLWdhdGV3YXknLCB7XHJcbiAgICAgIHJlc3RBcGlOYW1lOiAnUHJvZHVjdCBBUEkgR2F0ZXdheScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBBUEkgc2VydmVzIHRoZSBwcm9kdWN0IGxhbWJkYSBmdW5jdGlvbnMuJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFByb2R1Y3RMaXN0TGFtYmRhSW50ZWdyYXRpb24gPSBuZXcgYXBpR2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihcclxuICAgICAgZ2V0UHJvZHVjdExpc3QsXHJcbiAgICAgIHtcclxuICAgICAgICBpbnRlZ3JhdGlvblJlc3BvbnNlczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiAnMjAwJyxcclxuICAgICAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzpcclxuICAgICAgICAgICAgICAgIFwiJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMCdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzcG9uc2VUZW1wbGF0ZXM6IHtcclxuICAgICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbic6IFwiJGlucHV0Lmpzb24oJyQnKVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHByb3h5OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdFJlc291cmNlID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoJ3Byb2R1Y3RzJyk7XHJcbiAgICBwcm9kdWN0UmVzb3VyY2UuYWRkTWV0aG9kKCdHRVQnLCBnZXRQcm9kdWN0TGlzdExhbWJkYUludGVncmF0aW9uLCB7XHJcbiAgICAgIG1ldGhvZFJlc3BvbnNlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHN0YXR1c0NvZGU6ICcyMDAnLFxyXG4gICAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9kdWN0UmVzb3VyY2UuYWRkQ29yc1ByZWZsaWdodCh7XHJcbiAgICAgIGFsbG93T3JpZ2luczogWydodHRwOi8vbG9jYWxob3N0OjQyMDAnXSxcclxuICAgICAgYWxsb3dNZXRob2RzOiBbJ0dFVCddLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvZHVjdHNCeUlkID0gbmV3IGxhbWJkYS5GdW5jdGlvbihcclxuICAgICAgdGhpcyxcclxuICAgICAgJ2dldFByb2R1Y3RzQnlJZEZ1Y25jdGlvbicsXHJcbiAgICAgIHtcclxuICAgICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjBfWCxcclxuICAgICAgICBtZW1vcnlTaXplOiAxMDI0LFxyXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDUpLFxyXG4gICAgICAgIGhhbmRsZXI6ICdoYW5kbGVyLmdldFByb2R1Y3RzQnlJZCcsXHJcbiAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsICcuLycpKSxcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvZHVjdHNCeUlkTGFtYmRhSW50ZWdyYXRpb24gPSBuZXcgYXBpR2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihcclxuICAgICAgZ2V0UHJvZHVjdHNCeUlkLFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVxdWVzdFRlbXBsYXRlczoge1xyXG4gICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nOiBge1wicHJvZHVjdElkXCI6XCIkaW5wdXQucGFyYW1zKCdwcm9kdWN0SWQnKVwifWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnRlZ3JhdGlvblJlc3BvbnNlczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiAnMjAwJyxcclxuICAgICAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzpcclxuICAgICAgICAgICAgICAgIFwiJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMCdcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzcG9uc2VUZW1wbGF0ZXM6IHtcclxuICAgICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbic6IFwiJGlucHV0Lmpzb24oJyQnKVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHByb3h5OiBmYWxzZSxcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgcHJvZHVjdFJlc291cmNlMiA9IHByb2R1Y3RSZXNvdXJjZS5hZGRSZXNvdXJjZSgne3Byb2R1Y3RJZH0nKTtcclxuXHJcbiAgICBwcm9kdWN0UmVzb3VyY2UyLmFkZE1ldGhvZCgnR0VUJywgZ2V0UHJvZHVjdHNCeUlkTGFtYmRhSW50ZWdyYXRpb24sIHtcclxuICAgICAgbWV0aG9kUmVzcG9uc2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3RhdHVzQ29kZTogJzIwMCcsXHJcbiAgICAgICAgICByZXNwb25zZVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgJ21ldGhvZC5yZXNwb25zZS5oZWFkZXIuQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pO1xyXG5cclxuICAgIGFwaS5yb290LmFkZENvcnNQcmVmbGlnaHQoe1xyXG4gICAgICBhbGxvd09yaWdpbnM6IFsnaHR0cDovL2xvY2FsaG9zdDo0MjAwJ10sXHJcbiAgICAgIGFsbG93TWV0aG9kczogWydHRVQnXSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=