import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { join } from "path";
const TableName = "Todos";
export class TODOStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const todosTable = new dynamodb.Table(this, "Todos", {
      tableName: TableName,
      partitionKey: {
        name: "id",
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: "createdAt",
        type: dynamodb.AttributeType.NUMBER,
      },
    });

    const addTodoLambda = new lambda.Function(this, "lambda-function", {
      runtime: lambda.Runtime.NODEJS_20_X,
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      handler: "handler.addTodo",
      code: lambda.Code.fromAsset(join(__dirname, "./")),
      environment: {
        TABLE_NAME: TableName,
      },
    });

    todosTable.grantWriteData(addTodoLambda);
  }
}
