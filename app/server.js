import express from "express";
import router from "./apis/router.js";

export default function createHttpServer(staticFolder) {
    const server = express();
    
    server.use(express.static(staticFolder));
    server.use("/api", router);

    return server;
}