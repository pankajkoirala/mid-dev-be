import * as dotenv from "dotenv";
dotenv.config({ path: ".env" });
import express from "express";
import cors from "cors";
import { router as APIRoute } from "./routes/api.route.js";

const app = express();
import http from "http";
const server = http.Server(app);

//middleware for cors
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

//folder making public
app.use("/upload", express.static("upload"));

// Now using routing level middleware to mount all requsest as per url
app.use("/api", APIRoute);

// routes
app.get("/", (req, res) => {
  res.send("Server is running well");
});

// how to we start lession to the port
server.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT} `)
);
