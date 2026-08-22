import express from "express";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";


dotenv.config();

const app = express();
const __dirname = path.resolve();

const startingPort = Number(process.env.PORT) || 8000;


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    })
}
 
function startServer(port) {
    const server = app.listen(port, () => console.log("Server is running on port : " + port));

    server.on("error", (error) => {
        if (error.code === "EADDRINUSE") {
            console.log(`Port ${port} is busy. Trying port ${port + 1}...`);
            startServer(port + 1);
            return;
        }

        throw error;
    });
}

startServer(startingPort);