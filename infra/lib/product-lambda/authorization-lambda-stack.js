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
exports.AuthorizerLambdaStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const lambda = __importStar(require("aws-cdk-lib/aws-lambda"));
const path = __importStar(require("path"));
const dotenv = __importStar(require("dotenv"));
const envConfig = dotenv.config();
class AuthorizerLambdaStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const envVars = {};
        if (envConfig.parsed) {
            for (const [key, value] of Object.entries(envConfig.parsed)) {
                envVars[key] = value;
            }
        }
        console.log("CURRENT DIR:", process.cwd());
        console.log("ENV RESULT:", envConfig);
        console.log("ENV PARSED:", envConfig.parsed);
        console.log("ENV ERROR:", envConfig.error);
        const basicAuthorizerLambda = new lambda.Function(this, "basicAuthorizer", {
            functionName: "basicAuthorizer",
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: "basicAuthorizer.basicAuthorizer",
            code: lambda.Code.fromAsset(path.join(__dirname, "./")),
            environment: envVars,
        });
    }
}
exports.AuthorizerLambdaStack = AuthorizerLambdaStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbi1sYW1iZGEtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRob3JpemF0aW9uLWxhbWJkYS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFFbkMsK0RBQWlEO0FBQ2pELDJDQUE2QjtBQUM3QiwrQ0FBaUM7QUFFakMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRWxDLE1BQWEscUJBQXNCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDbEQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLE9BQU8sR0FBMkIsRUFBRSxDQUFDO1FBRTNDLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3JCLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO2dCQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQyxNQUFNLHFCQUFxQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDekUsWUFBWSxFQUFFLGlCQUFpQjtZQUMvQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxFQUFFLGlDQUFpQztZQUMxQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDdkQsV0FBVyxFQUFFLE9BQU87U0FDckIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBM0JELHNEQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWJcIjtcclxuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcclxuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gXCJhd3MtY2RrLWxpYi9hd3MtbGFtYmRhXCI7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcclxuXHJcbmNvbnN0IGVudkNvbmZpZyA9IGRvdGVudi5jb25maWcoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRob3JpemVyTGFtYmRhU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xyXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IGVudlZhcnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuXHJcbiAgICBpZiAoZW52Q29uZmlnLnBhcnNlZCkge1xyXG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhlbnZDb25maWcucGFyc2VkKSkge1xyXG4gICAgICAgIGVudlZhcnNba2V5XSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJDVVJSRU5UIERJUjpcIiwgcHJvY2Vzcy5jd2QoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVOViBSRVNVTFQ6XCIsIGVudkNvbmZpZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVOViBQQVJTRUQ6XCIsIGVudkNvbmZpZy5wYXJzZWQpO1xyXG4gICAgY29uc29sZS5sb2coXCJFTlYgRVJST1I6XCIsIGVudkNvbmZpZy5lcnJvcik7XHJcblxyXG4gICAgY29uc3QgYmFzaWNBdXRob3JpemVyTGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcImJhc2ljQXV0aG9yaXplclwiLCB7XHJcbiAgICAgIGZ1bmN0aW9uTmFtZTogXCJiYXNpY0F1dGhvcml6ZXJcIixcclxuICAgICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzIwX1gsXHJcbiAgICAgIG1lbW9yeVNpemU6IDEwMjQsXHJcbiAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDUpLFxyXG4gICAgICBoYW5kbGVyOiBcImJhc2ljQXV0aG9yaXplci5iYXNpY0F1dGhvcml6ZXJcIixcclxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi9cIikpLFxyXG4gICAgICBlbnZpcm9ubWVudDogZW52VmFycyxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=