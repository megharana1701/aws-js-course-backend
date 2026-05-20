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
exports.ProductSNSStack = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const sns = __importStar(require("aws-cdk-lib/aws-sns"));
const lambda = __importStar(require("aws-cdk-lib/aws-lambda"));
const aws_lambda_event_sources_1 = require("aws-cdk-lib/aws-lambda-event-sources");
const path = __importStar(require("path"));
class ProductSNSStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const productTopic = new sns.Topic(this, "product-sns");
        const lambdaFunction = new lambda.Function(this, "sns-lambda", {
            runtime: lambda.Runtime.NODEJS_20_X,
            memorySize: 1024,
            timeout: cdk.Duration.seconds(5),
            handler: "handler.main",
            code: lambda.Code.fromAsset(path.join(__dirname, "./")),
        });
        lambdaFunction.addEventSource(new aws_lambda_event_sources_1.SnsEventSource(productTopic));
    }
}
exports.ProductSNSStack = ProductSNSStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zbnMtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LXNucy1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFFbkMseURBQTJDO0FBQzNDLCtEQUFpRDtBQUNqRCxtRkFBc0U7QUFFdEUsMkNBQTZCO0FBRTdCLE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUM1QyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sWUFBWSxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFeEQsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDN0QsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN4RCxDQUFDLENBQUM7UUFFSCxjQUFjLENBQUMsY0FBYyxDQUFDLElBQUkseUNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FDRjtBQWhCRCwwQ0FnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSBcImF3cy1jZGstbGliXCI7XHJcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XHJcbmltcG9ydCAqIGFzIHNucyBmcm9tIFwiYXdzLWNkay1saWIvYXdzLXNuc1wiO1xyXG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSBcImF3cy1jZGstbGliL2F3cy1sYW1iZGFcIjtcclxuaW1wb3J0IHsgU25zRXZlbnRTb3VyY2UgfSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWxhbWJkYS1ldmVudC1zb3VyY2VzXCI7XHJcblxyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNOU1N0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcclxuXHJcbiAgICBjb25zdCBwcm9kdWN0VG9waWMgPSBuZXcgc25zLlRvcGljKHRoaXMsIFwicHJvZHVjdC1zbnNcIik7XHJcblxyXG4gICAgY29uc3QgbGFtYmRhRnVuY3Rpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwic25zLWxhbWJkYVwiLCB7XHJcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18yMF9YLFxyXG4gICAgICBtZW1vcnlTaXplOiAxMDI0LFxyXG4gICAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcyg1KSxcclxuICAgICAgaGFuZGxlcjogXCJoYW5kbGVyLm1haW5cIixcclxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi9cIikpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGFtYmRhRnVuY3Rpb24uYWRkRXZlbnRTb3VyY2UobmV3IFNuc0V2ZW50U291cmNlKHByb2R1Y3RUb3BpYykpO1xyXG4gIH1cclxufVxyXG4iXX0=