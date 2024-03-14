import dotenv from "dotenv";
dotenv.config();

export const envVarSet = {
  MONGODB_URI: process.env.MONGODB_URI,
};
