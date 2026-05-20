#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = __importStar(require("aws-cdk-lib/core"));
const product_lambda_stack_1 = require("../lib/product-lambda/product-lambda-stack");
const authorization_lambda_stack_1 = require("../lib/product-lambda/authorization-lambda-stack");
const app = new cdk.App();
//new TODOStack(app, "TodoStack");
new product_lambda_stack_1.ProductLambdaStack(app, "ProductLambdaStack", {});
//new ImportStack(app, "ImportS3Stack", {});
//new ProductSQSStack(app, "ProductSqsStack");
//new ProductSNSStack(app, "ProductSnsStack");
//new AuthorizerDemoStack(app, "AuthorizaerDemoStack");
new authorization_lambda_stack_1.AuthorizerLambdaStack(app, "AuthorizerLambdaStack");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzREFBd0M7QUFDeEMscUZBQWdGO0FBT2hGLGlHQUF5RjtBQUN6RixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQixrQ0FBa0M7QUFDbEMsSUFBSSx5Q0FBa0IsQ0FBQyxHQUFHLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdEQsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5Qyw4Q0FBOEM7QUFDOUMsdURBQXVEO0FBQ3ZELElBQUksa0RBQXFCLENBQUMsR0FBRyxFQUFFLHVCQUF1QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXHJcbmltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWIvY29yZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0TGFtYmRhU3RhY2sgfSBmcm9tIFwiLi4vbGliL3Byb2R1Y3QtbGFtYmRhL3Byb2R1Y3QtbGFtYmRhLXN0YWNrXCI7XHJcbmltcG9ydCB7IFRPRE9TdGFjayB9IGZyb20gXCIuLi9saWIvdG9kby90b2RvLXN0YWNrXCI7XHJcbmltcG9ydCB7IEhlbGxvUzN0YWNrIH0gZnJvbSBcIi4uL2xpYi9oZWxsby1zMy9oZWxsby1zMy1zdGFja1wiO1xyXG5pbXBvcnQgeyBJbXBvcnRTdGFjayB9IGZyb20gXCIuLi9saWIvcHJvZHVjdC1sYW1iZGEvaW1wb3J0LXN0YWNrXCI7XHJcbmltcG9ydCB7IFByb2R1Y3RTUVNTdGFjayB9IGZyb20gXCIuLi9saWIvcHJvZHVjdC1zcXMvcHJvZHVjdC1zcXMtc3RhY2tcIjtcclxuaW1wb3J0IHsgUHJvZHVjdFNOU1N0YWNrIH0gZnJvbSBcIi4uL2xpYi9wcm9kdWN0LXNucy9wcm9kdWN0LXNucy1zdGFja1wiO1xyXG5pbXBvcnQgeyBBdXRob3JpemVyRGVtb1N0YWNrIH0gZnJvbSBcIi4uL2xpYi9wcm9kdWN0LWxhbWJkYS9hdXRob3JpemVyLXN0YWNrXCI7XHJcbmltcG9ydCB7IEF1dGhvcml6ZXJMYW1iZGFTdGFjayB9IGZyb20gXCIuLi9saWIvcHJvZHVjdC1sYW1iZGEvYXV0aG9yaXphdGlvbi1sYW1iZGEtc3RhY2tcIjtcclxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcclxuLy9uZXcgVE9ET1N0YWNrKGFwcCwgXCJUb2RvU3RhY2tcIik7XHJcbm5ldyBQcm9kdWN0TGFtYmRhU3RhY2soYXBwLCBcIlByb2R1Y3RMYW1iZGFTdGFja1wiLCB7fSk7XHJcbi8vbmV3IEltcG9ydFN0YWNrKGFwcCwgXCJJbXBvcnRTM1N0YWNrXCIsIHt9KTtcclxuLy9uZXcgUHJvZHVjdFNRU1N0YWNrKGFwcCwgXCJQcm9kdWN0U3FzU3RhY2tcIik7XHJcbi8vbmV3IFByb2R1Y3RTTlNTdGFjayhhcHAsIFwiUHJvZHVjdFNuc1N0YWNrXCIpO1xyXG4vL25ldyBBdXRob3JpemVyRGVtb1N0YWNrKGFwcCwgXCJBdXRob3JpemFlckRlbW9TdGFja1wiKTtcclxubmV3IEF1dGhvcml6ZXJMYW1iZGFTdGFjayhhcHAsIFwiQXV0aG9yaXplckxhbWJkYVN0YWNrXCIpO1xyXG4iXX0=