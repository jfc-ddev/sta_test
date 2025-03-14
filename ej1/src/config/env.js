import config from "./config.js";

export const isDevelopment = config.NODE_ENV === "development";
export const isProduction = config.NODE_ENV === "production";
export const isTest = config.NODE_ENV === "test";
