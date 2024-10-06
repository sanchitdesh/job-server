import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./src/utils/dbConnect.js";

//dotenv
dotenv.config({ path: "./.env" });

//port
const PORT = process.env.PORT || 4000;

const app = express();
dbConnect();


// Use the main routes file
app.use('/api', routes);

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//routes
app.listen(PORT, (req, res) => {
  console.log(`server is running at ${PORT}`);
});

export default app;
