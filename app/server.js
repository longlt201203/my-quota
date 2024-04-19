import express from "express";

const server = express();

server.use(express.static("dist"));

export default server;