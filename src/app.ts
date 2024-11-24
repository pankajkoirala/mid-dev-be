import express from "express";
import http from "http";
import {
  configBodyParser,
  configCors,
  configEnvironmentVariable,
  configPublicFolder,
  configRequestResponse,
  configRoutes,
} from "./config/appConfiguration";

const app = express();

// load Configuration
configEnvironmentVariable();
configCors(app);
configRequestResponse(app);
configBodyParser(app);
configPublicFolder(app);
configRoutes(app);
configRequestResponse(app);

const server = new http.Server(app);

server.listen(process.env.PORT || 8000, () =>
  console.log(`server is running on port ${process.env.PORT} `)
);
