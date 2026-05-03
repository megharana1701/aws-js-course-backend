export declare function main(event: any): Promise<{
    message: string;
}>;
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
