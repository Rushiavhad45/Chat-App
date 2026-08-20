import "dotenv/config";
import express from "express";

const app = express();
const startingPort = Number(process.env.PORT) || 8000;

app.get("/api/auth/signup", (req, res) => { 
    res.send("Signup route");
});

app.get("/api/auth/login", (req, res) => { 
    res.send("Login route");
});

app.get("/api/auth/logout", (req, res) => { 
    res.send("logout route");
});

function startServer(port) {
    const server = app.listen(port, () => console.log(`Server is running on port ${port}`));

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