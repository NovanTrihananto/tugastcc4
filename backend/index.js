import express from "express";
import cors from "cors";
import UserRoute from "./routes/Userroute.js";
import db from "./databases/Databases.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

// Cek koneksi database saat server start
async function startServer() {
    try {
        await db.authenticate();
        await db.sync(); // Bisa juga taruh sync di sini supaya lebih rapi
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
    }

    app.listen(5000, () => console.log("Server running at http://localhost:5000"));
}

startServer();
