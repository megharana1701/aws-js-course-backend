import {
  APIGatewayAuthorizerResult,
  APIGatewayTokenAuthorizerEvent,
} from "aws-lambda";

const generatePolicy = (
  principalId: string,
  effect: "Allow" | "Deny",
  resource: string,
): APIGatewayAuthorizerResult => {
  return {
    principalId,
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: effect,
          Resource: resource,
        },
      ],
    },
  };
};

export const basicAuthorizer = async (
  event: APIGatewayTokenAuthorizerEvent,
): Promise<APIGatewayAuthorizerResult> => {
  if (!event.authorizationToken) {
    throw new Error("Unauthorized");
  }

  const token = event.authorizationToken.split(" ")[1];

  const decodedValue = Buffer.from(token, "base64").toString("utf-8");

  const [username, password] = decodedValue.split(":");

  const storedPassword = process.env[username];
  console.log(process.env);
  console.log("TOKEN:", token);
  console.log("DECODED:", decodedValue);
  console.log("USERNAME:", username);
  console.log("PASSWORD:", password);
  console.log("ENV PASSWORD:", storedPassword);

  if (!storedPassword || storedPassword !== password) {
    return generatePolicy(username, "Deny", event.methodArn);
  }

  return generatePolicy(username, "Allow", event.methodArn);
};
