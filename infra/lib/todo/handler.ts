import { Handler } from "aws-lambda";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid";

const dynamoDB = new DynamoDBClient({ region: process.env.AWS_REGION });

const tableName = process.env.TABLE_NAME as string;
export const addTodo: Handler = async (event, context) => {
  console.log("1:", JSON.stringify(event, null, 2));
  const item = {
    id: { S: uuidv4() },
    createdAt: { N: new Date().getTime().toFixed() },
    body: { S: event.body },
  };
  try {
    const command = new PutItemCommand({
      TableName: tableName,
      Item: item,
    });
    console.log("2:", JSON.stringify(item));

    const result = await dynamoDB.send(command);
    console.log("PutItem succeeded:", JSON.stringify(result, null, 2));
    return result;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error adding item to DynamoDB table");
  }
};
