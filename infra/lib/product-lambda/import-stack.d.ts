import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as sqs from "aws-cdk-lib/aws-sqs";
export declare class ImportStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props: cdk.StackProps & {
        queue: sqs.Queue;
    });
}
