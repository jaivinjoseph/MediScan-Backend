import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dbConn } from "./src/config/db.js";
import authRoutes from "./src/modules/auth/auth.routes.js";

const app = express();
//middlewares
app.use(cors());
app.use(express.json())
// app.use(bodyParser());
//dbconn
dbConn();
//routes
app.use("/api/auth", authRoutes);

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
