#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { ProductLambdaStack } from "../lib/product-lambda/product-lambda-stack";
import { TODOStack } from "../lib/todo/todo-stack";
import { HelloS3tack } from "../lib/hello-s3/hello-s3-stack";
import { ImportStack } from "../lib/product-lambda/import-stack";
import { ProductSQSStack } from "../lib/product-sqs/product-sqs-stack";
import { ProductSNSStack } from "../lib/product-sns/product-sns-stack";

const app = new cdk.App();
//new TODOStack(app, "TodoStack");
new ProductLambdaStack(app, "ProductLambdaStack", {});
//new ImportStack(app, "ImportS3Stack", {});
//new ProductSQSStack(app, "ProductSqsStack");
//new ProductSNSStack(app, "ProductSnsStack");
