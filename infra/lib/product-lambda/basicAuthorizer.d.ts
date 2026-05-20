import { APIGatewayAuthorizerResult, APIGatewayTokenAuthorizerEvent } from "aws-lambda";
export declare const basicAuthorizer: (event: APIGatewayTokenAuthorizerEvent) => Promise<APIGatewayAuthorizerResult>;
