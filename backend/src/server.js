import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/api/auth/signup", (req, res) => { 
    res.send("Signup route");
});

app.get("/api/auth/login", (req, res) => { 
    res.send("Login route");
});

app.get("/api/auth/logout", (req, res) => { 
    res.send("logout route");
});

app.listen(8000, () => console.log("Server is running on port 3000"));