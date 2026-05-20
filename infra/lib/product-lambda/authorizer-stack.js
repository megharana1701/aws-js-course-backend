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
exports.AuthorizerDemoStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const lambda = __importStar(require("aws-cdk-lib/aws-lambda"));
const apigateway = __importStar(require("aws-cdk-lib/aws-apigateway"));
const congnito = __importStar(require("aws-cdk-lib/aws-cognito"));
const path = __importStar(require("path"));
class AuthorizerDemoStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const AuthorizationDemolambdaFunction = new lambda.Function(this, "lambda-authorization-demo-function", {
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: "handler.authorizationDemo",
            code: lambda.Code.fromAsset(path.join(__dirname, "./")),
        });
        // authorization implementation
        const userPool = new congnito.UserPool(this, "authorization-demo-user-pool", {
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
        });
        const userPoolClient = userPool.addClient("authorization-demo-userpool-client", {
            userPoolClientName: "authorization-demo-userpool-client",
            authFlows: {
                userPassword: true,
            },
        });
        const userPoolDomain = userPool.addDomain("Domain", {
            cognitoDomain: {
                domainPrefix: "authorization",
            },
        });
        const api = new apigateway.RestApi(this, "authorization-demo", {
            restApiName: "Authorization Demo",
            description: "This API serves the Lambda functions for authorization demo.",
        });
        const demoAuthorizer = new apigateway.CognitoUserPoolsAuthorizer(this, "demo-authorizer", {
            authorizerName: "demo-authorizer",
            cognitoUserPools: [userPool], // Connect using the User Pool
        });
        const authorizationDemoLambdaIntegration = new apigateway.LambdaIntegration(AuthorizationDemolambdaFunction, {
            requestTemplates: {
                "application/json": `{ "message": "$input.params('message')" }`,
            },
            integrationResponses: [
                {
                    statusCode: "200",
                },
            ],
            proxy: false,
        });
        const authorizationDemoResourse = api.root.addResource("authorization-demo");
        authorizationDemoResourse.addMethod("GET", authorizationDemoLambdaIntegration, {
            methodResponses: [{ statusCode: "200" }],
            authorizer: demoAuthorizer,
        });
    }
}
exports.AuthorizerDemoStack = AuthorizerDemoStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplci1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGhvcml6ZXItc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQW1DO0FBRW5DLCtEQUFpRDtBQUNqRCx1RUFBeUQ7QUFDekQsa0VBQW9EO0FBQ3BELDJDQUE2QjtBQUU3QixNQUFhLG1CQUFvQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ2hELFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSwrQkFBK0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQ3pELElBQUksRUFDSixvQ0FBb0MsRUFDcEM7WUFDRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxFQUFFLDJCQUEyQjtZQUNwQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDeEQsQ0FDRixDQUFDO1FBRUYsK0JBQStCO1FBRS9CLE1BQU0sUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FDcEMsSUFBSSxFQUNKLDhCQUE4QixFQUM5QjtZQUNFLGFBQWEsRUFBRTtnQkFDYixLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRCxrQkFBa0IsRUFBRTtnQkFDbEIsVUFBVSxFQUFFO29CQUNWLE9BQU8sRUFBRSxJQUFJO29CQUNiLFFBQVEsRUFBRSxJQUFJO2lCQUNmO2dCQUNELFdBQVcsRUFBRTtvQkFDWCxRQUFRLEVBQUUsS0FBSztpQkFDaEI7YUFDRjtZQUNELGdCQUFnQixFQUFFO2dCQUNoQixTQUFTLEVBQUUsSUFBSSxRQUFRLENBQUMsaUJBQWlCLEVBQUU7YUFDNUM7WUFDRCxjQUFjLEVBQUU7Z0JBQ2QsU0FBUyxFQUFFLENBQUM7Z0JBQ1osZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsZ0JBQWdCLEVBQUUsS0FBSztnQkFDdkIsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLGNBQWMsRUFBRSxLQUFLO2FBQ3RCO1lBQ0QsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTztTQUN6QyxDQUNGLENBQUM7UUFFRixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUN2QyxvQ0FBb0MsRUFDcEM7WUFDRSxrQkFBa0IsRUFBRSxvQ0FBb0M7WUFDeEQsU0FBUyxFQUFFO2dCQUNULFlBQVksRUFBRSxJQUFJO2FBQ25CO1NBQ0YsQ0FDRixDQUFDO1FBRUYsTUFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDbEQsYUFBYSxFQUFFO2dCQUNiLFlBQVksRUFBRSxlQUFlO2FBQzlCO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRTtZQUM3RCxXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFdBQVcsRUFDVCw4REFBOEQ7U0FDakUsQ0FBQyxDQUFDO1FBRUgsTUFBTSxjQUFjLEdBQUcsSUFBSSxVQUFVLENBQUMsMEJBQTBCLENBQzlELElBQUksRUFDSixpQkFBaUIsRUFDakI7WUFDRSxjQUFjLEVBQUUsaUJBQWlCO1lBQ2pDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsOEJBQThCO1NBQzdELENBQ0YsQ0FBQztRQUVGLE1BQU0sa0NBQWtDLEdBQUcsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQ3pFLCtCQUErQixFQUMvQjtZQUNFLGdCQUFnQixFQUFFO2dCQUNoQixrQkFBa0IsRUFBRSwyQ0FBMkM7YUFDaEU7WUFDRCxvQkFBb0IsRUFBRTtnQkFDcEI7b0JBQ0UsVUFBVSxFQUFFLEtBQUs7aUJBQ2xCO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsS0FBSztTQUNiLENBQ0YsQ0FBQztRQUVGLE1BQU0seUJBQXlCLEdBQzdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFN0MseUJBQXlCLENBQUMsU0FBUyxDQUNqQyxLQUFLLEVBQ0wsa0NBQWtDLEVBQ2xDO1lBQ0UsZUFBZSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUM7WUFDeEMsVUFBVSxFQUFFLGNBQWM7U0FDM0IsQ0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBN0dELGtEQTZHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtbGFtYmRhXCI7XHJcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSBcImF3cy1jZGstbGliL2F3cy1hcGlnYXRld2F5XCI7XHJcbmltcG9ydCAqIGFzIGNvbmduaXRvIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtY29nbml0b1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aG9yaXplckRlbW9TdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgY29uc3QgQXV0aG9yaXphdGlvbkRlbW9sYW1iZGFGdW5jdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24oXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgIFwibGFtYmRhLWF1dGhvcml6YXRpb24tZGVtby1mdW5jdGlvblwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzIwX1gsXHJcbiAgICAgICAgbWVtb3J5U2l6ZTogMTAyNCxcclxuICAgICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcyg1KSxcclxuICAgICAgICBoYW5kbGVyOiBcImhhbmRsZXIuYXV0aG9yaXphdGlvbkRlbW9cIixcclxuICAgICAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQocGF0aC5qb2luKF9fZGlybmFtZSwgXCIuL1wiKSksXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGF1dGhvcml6YXRpb24gaW1wbGVtZW50YXRpb25cclxuXHJcbiAgICBjb25zdCB1c2VyUG9vbCA9IG5ldyBjb25nbml0by5Vc2VyUG9vbChcclxuICAgICAgdGhpcyxcclxuICAgICAgXCJhdXRob3JpemF0aW9uLWRlbW8tdXNlci1wb29sXCIsXHJcbiAgICAgIHtcclxuICAgICAgICBzaWduSW5BbGlhc2VzOiB7XHJcbiAgICAgICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGF1dG9WZXJpZnk6IHtcclxuICAgICAgICAgIGVtYWlsOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhbmRhcmRBdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBmYW1pbHlOYW1lOiB7XHJcbiAgICAgICAgICAgIG11dGFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHBob25lTnVtYmVyOiB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXN0b21BdHRyaWJ1dGVzOiB7XHJcbiAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBjb25nbml0by5EYXRlVGltZUF0dHJpYnV0ZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFzc3dvcmRQb2xpY3k6IHtcclxuICAgICAgICAgIG1pbkxlbmd0aDogOCxcclxuICAgICAgICAgIHJlcXVpcmVMb3dlcmNhc2U6IHRydWUsXHJcbiAgICAgICAgICByZXF1aXJlVXBwZXJjYXNlOiBmYWxzZSxcclxuICAgICAgICAgIHJlcXVpcmVEaWdpdHM6IHRydWUsXHJcbiAgICAgICAgICByZXF1aXJlU3ltYm9sczogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmFsUG9saWN5OiBjZGsuUmVtb3ZhbFBvbGljeS5ERVNUUk9ZLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB1c2VyUG9vbENsaWVudCA9IHVzZXJQb29sLmFkZENsaWVudChcclxuICAgICAgXCJhdXRob3JpemF0aW9uLWRlbW8tdXNlcnBvb2wtY2xpZW50XCIsXHJcbiAgICAgIHtcclxuICAgICAgICB1c2VyUG9vbENsaWVudE5hbWU6IFwiYXV0aG9yaXphdGlvbi1kZW1vLXVzZXJwb29sLWNsaWVudFwiLFxyXG4gICAgICAgIGF1dGhGbG93czoge1xyXG4gICAgICAgICAgdXNlclBhc3N3b3JkOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHVzZXJQb29sRG9tYWluID0gdXNlclBvb2wuYWRkRG9tYWluKFwiRG9tYWluXCIsIHtcclxuICAgICAgY29nbml0b0RvbWFpbjoge1xyXG4gICAgICAgIGRvbWFpblByZWZpeDogXCJhdXRob3JpemF0aW9uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBhcGkgPSBuZXcgYXBpZ2F0ZXdheS5SZXN0QXBpKHRoaXMsIFwiYXV0aG9yaXphdGlvbi1kZW1vXCIsIHtcclxuICAgICAgcmVzdEFwaU5hbWU6IFwiQXV0aG9yaXphdGlvbiBEZW1vXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiVGhpcyBBUEkgc2VydmVzIHRoZSBMYW1iZGEgZnVuY3Rpb25zIGZvciBhdXRob3JpemF0aW9uIGRlbW8uXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZW1vQXV0aG9yaXplciA9IG5ldyBhcGlnYXRld2F5LkNvZ25pdG9Vc2VyUG9vbHNBdXRob3JpemVyKFxyXG4gICAgICB0aGlzLFxyXG4gICAgICBcImRlbW8tYXV0aG9yaXplclwiLFxyXG4gICAgICB7XHJcbiAgICAgICAgYXV0aG9yaXplck5hbWU6IFwiZGVtby1hdXRob3JpemVyXCIsXHJcbiAgICAgICAgY29nbml0b1VzZXJQb29sczogW3VzZXJQb29sXSwgLy8gQ29ubmVjdCB1c2luZyB0aGUgVXNlciBQb29sXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGF1dGhvcml6YXRpb25EZW1vTGFtYmRhSW50ZWdyYXRpb24gPSBuZXcgYXBpZ2F0ZXdheS5MYW1iZGFJbnRlZ3JhdGlvbihcclxuICAgICAgQXV0aG9yaXphdGlvbkRlbW9sYW1iZGFGdW5jdGlvbixcclxuICAgICAge1xyXG4gICAgICAgIHJlcXVlc3RUZW1wbGF0ZXM6IHtcclxuICAgICAgICAgIFwiYXBwbGljYXRpb24vanNvblwiOiBgeyBcIm1lc3NhZ2VcIjogXCIkaW5wdXQucGFyYW1zKCdtZXNzYWdlJylcIiB9YCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGludGVncmF0aW9uUmVzcG9uc2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IFwiMjAwXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcHJveHk6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBhdXRob3JpemF0aW9uRGVtb1Jlc291cnNlID1cclxuICAgICAgYXBpLnJvb3QuYWRkUmVzb3VyY2UoXCJhdXRob3JpemF0aW9uLWRlbW9cIik7XHJcblxyXG4gICAgYXV0aG9yaXphdGlvbkRlbW9SZXNvdXJzZS5hZGRNZXRob2QoXHJcbiAgICAgIFwiR0VUXCIsXHJcbiAgICAgIGF1dGhvcml6YXRpb25EZW1vTGFtYmRhSW50ZWdyYXRpb24sXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2RSZXNwb25zZXM6IFt7IHN0YXR1c0NvZGU6IFwiMjAwXCIgfV0sXHJcbiAgICAgICAgYXV0aG9yaXplcjogZGVtb0F1dGhvcml6ZXIsXHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXX0=