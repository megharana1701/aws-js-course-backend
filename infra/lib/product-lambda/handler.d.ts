export declare function main(event: any): Promise<{
    message: string;
}>;
export declare function getProductList(): Promise<{
    id: string;
    title: string;
    description: string;
    price: number;
    count: number;
}[]>;
export declare function getProductsById(event: any): Promise<{
    id: string;
    title: string;
    description: string;
    price: number;
    count: number;
} | undefined>;
