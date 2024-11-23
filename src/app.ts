import express, { Request, Response } from "express";
import cors from "cors";
import http from "http";
import {
  configBodyParser,
  configCors,
  configEnvironmentVariable,
  configPublicFolder,
  configRequestResponse,
  configRoutes,
} from "./config/appConfiguration";
import { upload } from "./middleware/fileUploader";
//import { router as APIRoute } from "./routes/api.route.js";

const app = express();

// load Configuration
configEnvironmentVariable();
configCors(app);
configRequestResponse(app);
configBodyParser(app);
configPublicFolder(app);
configRoutes(app);

// Upload endpoint
app.post(
  "/upload",
  upload.single("file"), // Middleware for handling a single file
  (req: any, res: any, next: any) => {
    try {
      // Ensure a file was uploaded
      if (!req.file) {
        return res.status(400).send({ error: "No file uploaded." });
      }

      // Send response with file details
      res.status(200).send({
        message: "File uploaded successfully",
        filePath: `/public/uploads/${req.file.filename}`,
      });
    } catch (error) {
      next(error); // Pass error to the error-handling middleware
    }
  }
);

configRequestResponse(app);
const server = new http.Server(app);
// how to we start lession to the port
server.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT} `)
);
