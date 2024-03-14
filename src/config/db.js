import mongoose from "mongoose";
import { envVarSet } from "../constants/env.js";
export async function dbConn() {
  await mongoose.connect(envVarSet.MONGODB_URI).then(() => {
    console.log("Database connected successfully");
  });
}
