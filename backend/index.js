import express from "express";
import db from "./config/database.js";
import productRouter from "./routers/index.js";
import cors from "cors";

const app = express();

try {
  await db.authenticate();
  console.log("Databe connected...");
} catch (error) {
  console.error("Connection error: ", error);
}

app.use(cors());
app.use(express.json());
app.use("/products", productRouter);

app.listen(5000, () => console.log("Server runing at port 5000"));
