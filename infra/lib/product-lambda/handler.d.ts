import { SQSEvent } from "aws-lambda";
export declare function main(event: any): Promise<{
    message: string;
}>;
export declare function importFileParser(event: any): Promise<void>;
export declare function getProductList(): Promise<{
    count: any;
}[]>;
export declare function getProductsById(event: any): Promise<{
    statusCode: number;
    body: string;
} | {
    count: any;
    statusCode?: undefined;
    body?: undefined;
}>;
export declare function createProduct(event: any): Promise<import("@aws-sdk/lib-dynamodb").PutCommandOutput>;
export declare function importProductsFile(event: any): Promise<{
    statusCode: number;
    body: string;
    headers?: undefined;
} | {
    statusCode: number;
    headers: {
        "Access-Control-Allow-Origin": string;
    };
    body: string;
}>;
export declare function catalogSQS(event: SQSEvent): Promise<{
    statusCode: number;
    body: string;
}>;
export declare function authorizationDemo(event: any): Promise<{
    message: string;
}>;
