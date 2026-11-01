import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  mongoUri: process.env.MONGODB_URI || "",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
  contactEmail: process.env.CONTACT_EMAIL || "",
  contactPhone: process.env.CONTACT_PHONE || "",
  contactAddress: process.env.CONTACT_ADDRESS || "",
};
