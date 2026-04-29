import { v4 as uuidv4 } from "uuid";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: "ap-south-1" });

const PRODUCTS_TABLE = "Products";
const STOCK_TABLE = "stock";

const products = [
  {
    title: "Laptop",
    description: "Gaming laptop",
    price: 1200,
    count: 5,
  },
  {
    title: "Phone",
    description: "Smartphone",
    price: 800,
    count: 10,
  },
  {
    title: "Headphones",
    description: "Noise cancelling",
    price: 200,
    count: 15,
  },
];

const seed = async () => {
  try {
    for (const item of products) {
      const id = uuidv4();
      await client.send(
        new PutItemCommand({
          TableName: PRODUCTS_TABLE,
          Item: {
            id: { S: id },
            title: { S: item.title },
            description: { S: item.description },
            price: { N: item.price.toString() },
          },
        }),
      );
      await client.send(
        new PutItemCommand({
          TableName: STOCK_TABLE,
          Item: {
            product_id: { S: id },
            count: { N: item.count.toString() },
          },
        }),
      );

      console.log(`Inserted product: ${item.title}`);
    }

    console.log("Seeding completed!");
  } catch (error) {
    console.error("Seeding error:", error);
  }
};
seed();
