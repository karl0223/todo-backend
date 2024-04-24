import express from "express";
import "./db/mongoose.js";

import http from "http";

import todoRouter from "./routers/todoRouter.js";

const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(todoRouter);

export default server;
