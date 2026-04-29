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
const app = new cdk.App();
//new TODOStack(app, "TodoStack");
new product_lambda_stack_1.ProductLambdaStack(app, "ProductLambdaStack", {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzREFBd0M7QUFDeEMscUZBQWdGO0FBR2hGLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLGtDQUFrQztBQUNsQyxJQUFJLHlDQUFrQixDQUFDLEdBQUcsRUFBRSxvQkFBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIiMhL3Vzci9iaW4vZW52IG5vZGVcclxuaW1wb3J0ICogYXMgY2RrIGZyb20gXCJhd3MtY2RrLWxpYi9jb3JlXCI7XHJcbmltcG9ydCB7IFByb2R1Y3RMYW1iZGFTdGFjayB9IGZyb20gXCIuLi9saWIvcHJvZHVjdC1sYW1iZGEvcHJvZHVjdC1sYW1iZGEtc3RhY2tcIjtcclxuaW1wb3J0IHsgVE9ET1N0YWNrIH0gZnJvbSBcIi4uL2xpYi90b2RvL3RvZG8tc3RhY2tcIjtcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XHJcbi8vbmV3IFRPRE9TdGFjayhhcHAsIFwiVG9kb1N0YWNrXCIpO1xyXG5uZXcgUHJvZHVjdExhbWJkYVN0YWNrKGFwcCwgXCJQcm9kdWN0TGFtYmRhU3RhY2tcIiwge30pO1xyXG4iXX0=