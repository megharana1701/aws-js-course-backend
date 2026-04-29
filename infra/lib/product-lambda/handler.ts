import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  GetCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { randomUUID } from "crypto";

const client = new DynamoDBClient({});
const dynamoDB = DynamoDBDocumentClient.from(client);

const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE!;
const STOCK_TABLE = process.env.STOCK_TABLE!;

export async function main(event: any) {
  return {
    message: `SUCCESS with message ${event.message}`,
  };
}

export async function getProductList() {
  const productsRes = await dynamoDB.send(
    new ScanCommand({ TableName: PRODUCTS_TABLE }),
  );

  const stockRes = await dynamoDB.send(
    new ScanCommand({ TableName: STOCK_TABLE }),
  );
  const products = productsRes.Items || [];
  const stock = stockRes.Items || [];

  return products.map((product) => {
    const productStock = stock.find((s) => s.product_id === product.id);

    return {
      ...product,
      count: productStock?.count || 0,
    };
  });
}

export async function getProductsById(event: any) {
  const productId = event?.productId;
  console.log(event);
  const productRes = await dynamoDB.send(
    new GetCommand({
      TableName: PRODUCTS_TABLE,
      Key: { id: productId },
    }),
  );

  const stockRes = await dynamoDB.send(
    new GetCommand({
      TableName: STOCK_TABLE,
      Key: { product_id: productId },
    }),
  );

  const product = productRes.Item;
  const stock = stockRes.Item;

  if (!product) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Product not found" }),
    };
  }

  return {
    ...product,
    count: stock?.count || 0,
  };
}

export async function createProduct(event: any) {
  console.log("1", event);
  const product = event.product;
  const item = {
    id: randomUUID(),
    price: Number(product.price),
    ...product,
  };
  try {
    const command = new PutCommand({
      TableName: PRODUCTS_TABLE,
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
}
