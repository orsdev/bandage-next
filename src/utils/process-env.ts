export const processEnv = {
  BASE_ENDPOINT: process.env.BASE_ENDPOINT || "https://dummyjson.com",
  DEV_ENVIRONMENT: process.env.NODE_ENV === "development",
};
