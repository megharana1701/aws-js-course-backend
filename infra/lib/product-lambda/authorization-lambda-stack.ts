import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as path from "path";
import * as dotenv from "dotenv";

const envConfig = dotenv.config();

export class AuthorizerLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const envVars: Record<string, string> = {};

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
