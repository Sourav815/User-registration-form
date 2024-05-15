import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
      origin: process.env.ORIGIN,
      credentials: true,
    })
  );

app.use(express.json({ limit: "1mb" }));
app.use(express.static("public"));
app.use(express.urlencoded({ limit: "1mb", extended: true }));
app.use(cookieParser());


import patientRouter from "./routes/patient.route.js";

app.use("/api/v1/patient", patientRouter);

export { app };
