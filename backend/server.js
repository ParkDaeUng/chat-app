import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectDB.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   // root route http://localhost:5000/
//   res.send("Hello World!");
// });

app.use(express.json());  // to parse the incoding requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`)
});