import express from "express";
import cors from "cors";
import { env } from "./config/env.js";
import { connectDb } from "./config/db.js";
import contactRoutes from "./routes/contact.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

const app = express();

app.disable("x-powered-by");
app.use(
  cors({
    origin: env.frontendUrl,
    methods: ["GET", "POST"],
  }),
);
app.use(express.json({ limit: "32kb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "fannin-technologies-api" });
});

app.get("/api/company", (_req, res) => {
  res.json({
    ok: true,
    contact: {
      email: env.contactEmail,
      phone: env.contactPhone,
      address: env.contactAddress,
    },
  });
});

app.use("/api/contact", contactRoutes);
app.use(notFound);
app.use(errorHandler);

async function start() {
  try {
    await connectDb();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.warn("MongoDB is not available:", error.message);
    console.warn("The site will run, but contact submissions cannot be stored until MongoDB is configured.");
  }

  app.listen(env.port, () => {
    console.log(`API listening on http://localhost:${env.port}`);
  });
}

start();
