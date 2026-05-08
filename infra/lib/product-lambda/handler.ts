import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  GetCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import { Readable } from "stream";
import csv from "csv-parser";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { randomUUID } from "crypto";
const client = new DynamoDBClient({});
const dynamoDB = DynamoDBDocumentClient.from(client);
const s3Client = new S3Client({ region: "ap-south-1" });

const PRODUCTS_TABLE = process.env.PRODUCTS_TABLE!;
const STOCK_TABLE = process.env.STOCK_TABLE!;
const BUCKET = process.env.BUCKET;

export async function main(event: any) {
  return {
    message: `SUCCESS with message ${event.message}`,
  };
}

const s3 = new S3Client({});

export async function importFileParser(event: any) {
  console.log("Event:", JSON.stringify(event));

  for (const record of event.Records) {
    const bucket = record.s3.bucket.name;
    const key = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));

    console.log(`Processing file: ${key}`);

    const command = new GetObjectCommand({
      Bucket: bucket,
      Key: key,
    });

    const response = await s3.send(command);

    const stream = response.Body as NodeJS.ReadableStream;
    stream
      .pipe(csv())
      .on("data", (data) => {
        console.log("Parsed record:", data);
      })
      .on("end", () => {
        console.log("Done");
      })
      .on("error", (err) => {
        console.error(err);
      });
  }
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

export async function importProductsFile(event: any) {
  console.log(event);
  const fileName = event.queryStringParameters?.name;
  if (!fileName) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "fileName query parameter is required" }),
    };
  }
  if (!fileName.endsWith(".csv")) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Only CSV files are allowed" }),
    };
  }
  const command = new PutObjectCommand({
    Bucket: process.env.BUCKET,
    Key: `uploaded/${fileName}`,
    ContentType: "text/csv",
  });

  try {
    const signedUrl = await getSignedUrl(s3Client, command, {
      expiresIn: 300,
    });
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: signedUrl,
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
}
