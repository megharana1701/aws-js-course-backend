#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { ProductLambdaStack } from "../lib/product-lambda/product-lambda-stack";
import { TODOStack } from "../lib/todo/todo-stack";

const app = new cdk.App();
//new TODOStack(app, "TodoStack");
new ProductLambdaStack(app, "ProductLambdaStack", {});
