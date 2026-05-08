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
const import_stack_1 = require("../lib/product-lambda/import-stack");
const app = new cdk.App();
//new TODOStack(app, "TodoStack");
//new ProductLambdaStack(app, "ProductLambdaStack", {});
new import_stack_1.ImportStack(app, "ImportS3Stack", {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzREFBd0M7QUFJeEMscUVBQWlFO0FBRWpFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLGtDQUFrQztBQUNsQyx3REFBd0Q7QUFDeEQsSUFBSSwwQkFBVyxDQUFDLEdBQUcsRUFBRSxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXHJcbmltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWIvY29yZVwiO1xyXG5pbXBvcnQgeyBQcm9kdWN0TGFtYmRhU3RhY2sgfSBmcm9tIFwiLi4vbGliL3Byb2R1Y3QtbGFtYmRhL3Byb2R1Y3QtbGFtYmRhLXN0YWNrXCI7XHJcbmltcG9ydCB7IFRPRE9TdGFjayB9IGZyb20gXCIuLi9saWIvdG9kby90b2RvLXN0YWNrXCI7XHJcbmltcG9ydCB7IEhlbGxvUzN0YWNrIH0gZnJvbSBcIi4uL2xpYi9oZWxsby1zMy9oZWxsby1zMy1zdGFja1wiO1xyXG5pbXBvcnQgeyBJbXBvcnRTdGFjayB9IGZyb20gXCIuLi9saWIvcHJvZHVjdC1sYW1iZGEvaW1wb3J0LXN0YWNrXCI7XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xyXG4vL25ldyBUT0RPU3RhY2soYXBwLCBcIlRvZG9TdGFja1wiKTtcclxuLy9uZXcgUHJvZHVjdExhbWJkYVN0YWNrKGFwcCwgXCJQcm9kdWN0TGFtYmRhU3RhY2tcIiwge30pO1xyXG5uZXcgSW1wb3J0U3RhY2soYXBwLCBcIkltcG9ydFMzU3RhY2tcIiwge30pO1xyXG4iXX0=