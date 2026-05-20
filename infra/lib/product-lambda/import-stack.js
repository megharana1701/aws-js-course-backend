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
exports.ImportStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const s3 = __importStar(require("aws-cdk-lib/aws-s3"));
const s3deploy = __importStar(require("aws-cdk-lib/aws-s3-deployment"));
const lambda = __importStar(require("aws-cdk-lib/aws-lambda"));
const path = __importStar(require("path"));
const apiGateway = __importStar(require("aws-cdk-lib/aws-apigateway"));
const s3n = __importStar(require("aws-cdk-lib/aws-s3-notifications"));
class ImportStack extends cdk.Stack {
    constructor(scope, id, props) {
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
        importBucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(importFileParser), {
            prefix: "uploaded/",
        });
        props.queue.grantSendMessages(importFileParser);
        const basicAuthorizerLambda = lambda.Function.fromFunctionName(this, "basicAuthorizerLambda", "basicAuthorizer");
        const authorizer = new apiGateway.TokenAuthorizer(this, "importAuthorizer", {
            handler: basicAuthorizerLambda,
        });
        const api = new apiGateway.RestApi(this, "import-product-api-gateway", {
            restApiName: "Import Product API Gateway",
            description: "This API serves the import product lambda functions.",
        });
        const getImportProductLambdaIntegration = new apiGateway.LambdaIntegration(importProductsFile);
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
exports.ImportStack = ImportStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW1wb3J0LXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFtQztBQUVuQyx1REFBeUM7QUFDekMsd0VBQTBEO0FBQzFELCtEQUFpRDtBQUNqRCwyQ0FBNkI7QUFDN0IsdUVBQXlEO0FBQ3pELHNFQUF3RDtBQUd4RCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsS0FBSztJQUN4QyxZQUNFLEtBQWdCLEVBQ2hCLEVBQVUsRUFDVixLQUE0QztRQUU1QyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN2RCxTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU87WUFDeEMsSUFBSSxFQUFFO2dCQUNKO29CQUNFLGNBQWMsRUFBRTt3QkFDZCxFQUFFLENBQUMsV0FBVyxDQUFDLEdBQUc7d0JBQ2xCLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRzt3QkFDbEIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJO3FCQUNwQjtvQkFDRCxjQUFjLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDekMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDO2lCQUN0QjthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ3hELGlCQUFpQixFQUFFLFlBQVk7WUFDL0IsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2pELENBQUMsQ0FBQztRQUVILE1BQU0sa0JB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Q1YsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE1BQU07U0FDdkQsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUN4QixZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUN2QyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztZQUN4QyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBbEhELGtDQWtIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuaW1wb3J0ICogYXMgczMgZnJvbSBcImF3cy1jZGstbGliL2F3cy1zM1wiO1xyXG5pbXBvcnQgKiBhcyBzM2RlcGxveSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLXMzLWRlcGxveW1lbnRcIjtcclxuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtbGFtYmRhXCI7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0ICogYXMgYXBpR2F0ZXdheSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXlcIjtcclxuaW1wb3J0ICogYXMgczNuIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtczMtbm90aWZpY2F0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyBzcXMgZnJvbSBcImF3cy1jZGstbGliL2F3cy1zcXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbXBvcnRTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBzY29wZTogQ29uc3RydWN0LFxyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIHByb3BzOiBjZGsuU3RhY2tQcm9wcyAmIHsgcXVldWU6IHNxcy5RdWV1ZSB9LFxyXG4gICkge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgY29uc3QgaW1wb3J0QnVja2V0ID0gbmV3IHMzLkJ1Y2tldCh0aGlzLCBcIkltcG9ydEJ1Y2tldFwiLCB7XHJcbiAgICAgIHZlcnNpb25lZDogdHJ1ZSxcclxuICAgICAgcmVtb3ZhbFBvbGljeTogY2RrLlJlbW92YWxQb2xpY3kuREVTVFJPWSxcclxuICAgICAgY29yczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGFsbG93ZWRNZXRob2RzOiBbXHJcbiAgICAgICAgICAgIHMzLkh0dHBNZXRob2RzLkdFVCxcclxuICAgICAgICAgICAgczMuSHR0cE1ldGhvZHMuUFVULFxyXG4gICAgICAgICAgICBzMy5IdHRwTWV0aG9kcy5QT1NULFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIGFsbG93ZWRPcmlnaW5zOiBbXCJodHRwOi8vbG9jYWxob3N0OjQyMDBcIl0sXHJcbiAgICAgICAgICBhbGxvd2VkSGVhZGVyczogW1wiKlwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgbmV3IHMzZGVwbG95LkJ1Y2tldERlcGxveW1lbnQodGhpcywgXCJjcmVhdGVVcGxvYWRGb2xkZXJcIiwge1xyXG4gICAgICBkZXN0aW5hdGlvbkJ1Y2tldDogaW1wb3J0QnVja2V0LFxyXG4gICAgICBzb3VyY2VzOiBbczNkZXBsb3kuU291cmNlLmRhdGEoXCJ1cGxvYWRlZC9cIiwgXCJcIildLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaW1wb3J0UHJvZHVjdHNGaWxlID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcImltcG9ydFByb2R1Y3RzRmlsZVwiLCB7XHJcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxyXG4gICAgICBtZW1vcnlTaXplOiAxMDI0LFxyXG4gICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcyg1KSxcclxuICAgICAgaGFuZGxlcjogXCJoYW5kbGVyLmltcG9ydFByb2R1Y3RzRmlsZVwiLFxyXG4gICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgXCIuL1wiKSksXHJcbiAgICAgIGVudmlyb25tZW50OiB7XHJcbiAgICAgICAgQlVDS0VUOiBpbXBvcnRCdWNrZXQuYnVja2V0TmFtZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGltcG9ydEJ1Y2tldC5ncmFudFJlYWRXcml0ZShpbXBvcnRQcm9kdWN0c0ZpbGUpO1xyXG4gICAgLy8gcHJvZHVjdHNUYWJsZS5ncmFudFJlYWREYXRhKGdldFByb2R1Y3RMaXN0KTtcclxuICAgIC8vIHN0b2NrVGFibGUuZ3JhbnRSZWFkRGF0YShnZXRQcm9kdWN0TGlzdCk7XHJcblxyXG4gICAgLy9pbXBvcnRcclxuXHJcbiAgICAvLyBjb25zdCBjYXRhbG9nSXRlbXNRdWV1ZSA9IG5ldyBzcXMuUXVldWUodGhpcywgXCJjYXRhbG9nSXRlbXNRdWV1ZVwiLCB7XHJcbiAgICAvLyAgIHZpc2liaWxpdHlUaW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMCksXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBjb25zdCBpbXBvcnRGaWxlUGFyc2VyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcImltcG9ydEZpbGVQYXJzZXJcIiwge1xyXG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMjBfWCxcclxuICAgICAgbWVtb3J5U2l6ZTogMTAyNCxcclxuICAgICAgdGltZW91dDogY2RrLkR1cmF0aW9uLm1pbnV0ZXMoMSksXHJcbiAgICAgIGhhbmRsZXI6IFwiaGFuZGxlci5pbXBvcnRGaWxlUGFyc2VyXCIsXHJcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChwYXRoLmpvaW4oX19kaXJuYW1lLCBcIi4vXCIpKSxcclxuICAgICAgZW52aXJvbm1lbnQ6IHtcclxuICAgICAgICBCVUNLRVQ6IGltcG9ydEJ1Y2tldC5idWNrZXROYW1lLFxyXG4gICAgICAgIFNRU19VUkw6IHByb3BzLnF1ZXVlLnF1ZXVlVXJsLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaW1wb3J0QnVja2V0LmdyYW50UmVhZChpbXBvcnRGaWxlUGFyc2VyKTtcclxuICAgIGltcG9ydEJ1Y2tldC5hZGRFdmVudE5vdGlmaWNhdGlvbihcclxuICAgICAgczMuRXZlbnRUeXBlLk9CSkVDVF9DUkVBVEVELFxyXG4gICAgICBuZXcgczNuLkxhbWJkYURlc3RpbmF0aW9uKGltcG9ydEZpbGVQYXJzZXIpLFxyXG4gICAgICB7XHJcbiAgICAgICAgcHJlZml4OiBcInVwbG9hZGVkL1wiLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICAgIHByb3BzLnF1ZXVlLmdyYW50U2VuZE1lc3NhZ2VzKGltcG9ydEZpbGVQYXJzZXIpO1xyXG5cclxuICAgIGNvbnN0IGJhc2ljQXV0aG9yaXplckxhbWJkYSA9IGxhbWJkYS5GdW5jdGlvbi5mcm9tRnVuY3Rpb25OYW1lKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICBcImJhc2ljQXV0aG9yaXplckxhbWJkYVwiLFxyXG4gICAgICBcImJhc2ljQXV0aG9yaXplclwiLFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhdXRob3JpemVyID0gbmV3IGFwaUdhdGV3YXkuVG9rZW5BdXRob3JpemVyKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICBcImltcG9ydEF1dGhvcml6ZXJcIixcclxuICAgICAge1xyXG4gICAgICAgIGhhbmRsZXI6IGJhc2ljQXV0aG9yaXplckxhbWJkYSxcclxuICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgYXBpID0gbmV3IGFwaUdhdGV3YXkuUmVzdEFwaSh0aGlzLCBcImltcG9ydC1wcm9kdWN0LWFwaS1nYXRld2F5XCIsIHtcclxuICAgICAgcmVzdEFwaU5hbWU6IFwiSW1wb3J0IFByb2R1Y3QgQVBJIEdhdGV3YXlcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiVGhpcyBBUEkgc2VydmVzIHRoZSBpbXBvcnQgcHJvZHVjdCBsYW1iZGEgZnVuY3Rpb25zLlwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0SW1wb3J0UHJvZHVjdExhbWJkYUludGVncmF0aW9uID0gbmV3IGFwaUdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oXHJcbiAgICAgIGltcG9ydFByb2R1Y3RzRmlsZSxcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgaW1wb3J0UHJvZHVjdFJlc291cmNlID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoXCJpbXBvcnRcIik7XHJcblxyXG4gICAgaW1wb3J0UHJvZHVjdFJlc291cmNlLmFkZENvcnNQcmVmbGlnaHQoe1xyXG4gICAgICBhbGxvd09yaWdpbnM6IFtcImh0dHA6Ly9sb2NhbGhvc3Q6NDIwMFwiXSxcclxuICAgICAgYWxsb3dNZXRob2RzOiBbXCJHRVRcIiwgXCJPUFRJT05TXCJdLFxyXG4gICAgICBhbGxvd0hlYWRlcnM6IFtcIipcIl0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpbXBvcnRQcm9kdWN0UmVzb3VyY2UuYWRkTWV0aG9kKFwiR0VUXCIsIGdldEltcG9ydFByb2R1Y3RMYW1iZGFJbnRlZ3JhdGlvbiwge1xyXG4gICAgICBhdXRob3JpemVyLFxyXG4gICAgICBhdXRob3JpemF0aW9uVHlwZTogYXBpR2F0ZXdheS5BdXRob3JpemF0aW9uVHlwZS5DVVNUT00sXHJcbiAgICB9KTtcclxuXHJcbiAgICBhcGkucm9vdC5hZGRDb3JzUHJlZmxpZ2h0KHtcclxuICAgICAgYWxsb3dPcmlnaW5zOiBbXCJodHRwOi8vbG9jYWxob3N0OjQyMDBcIl0sXHJcbiAgICAgIGFsbG93TWV0aG9kczogW1wiR0VUXCIsIFwiUE9TVFwiLCBcIk9QVElPTlNcIl0sXHJcbiAgICAgIGFsbG93SGVhZGVyczogW1wiKlwiXSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=