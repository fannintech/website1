import mongoose from "mongoose";
import { env } from "./env.js";

export async function connectDb() {
  if (!env.mongoUri) {
    throw new Error("MONGODB_URI is not configured.");
  }

  mongoose.set("strictQuery", true);
  await mongoose.connect(env.mongoUri, {
    serverSelectionTimeoutMS: 5000,
  });
}

export function isDbConnected() {
  return mongoose.connection.readyState === 1;
}
