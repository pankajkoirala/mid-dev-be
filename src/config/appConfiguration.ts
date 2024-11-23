import express, { Express } from "express";
import cors, { CorsOptions } from "cors";
import * as dotenv from "dotenv";
import path from "path";
import { ALLOWDED_LOCAL_ORIGIN } from "./appConstant";
import { router as APIRoutes } from "../routes";

export const configEnvironmentVariable = () => {
  dotenv.config({ path: ".env" });
};

export const configCors = (app: Express) => {
  const option: CorsOptions = {
    origin: [ALLOWDED_LOCAL_ORIGIN],
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"],
  };

  app.use(cors(option));
};

export const configRequestResponse = (app: Express) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
};

export const configBodyParser = (app: Express) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json({ limit: "50mb" }));
};

export const configPublicFolder = (app: Express) => {
  app.use("/public", express.static(path.join(__dirname, "../public")));
};

export const configRoutes = (app: Express) => {
  app.use("/api", APIRoutes);
};
