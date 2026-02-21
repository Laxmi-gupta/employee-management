import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { connectDB } from "./config/db.js";
import createAdmin from "./utils/createAdmin.js";
import {userRoute} from "./routes/auth.routes.js"
import { authMiddleware } from "./middleware/route.middleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const startServer = async () => {
  try {
    await connectDB();
    console.log("DB Connected");
    
    app.use("/uploads", express.static("uploads"));

    app.use('/api/auth',userRoute);
    app.use('/api/employees',employeeRoute);
    
    await createAdmin();

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });

    app.use((err, req, res, next) => {
      res.status(500).json({
        message: err.message || "Internal Server Error"
      });
    });

  } catch (error) {
    console.error("Startup error:", error.message);
  }
};

startServer();