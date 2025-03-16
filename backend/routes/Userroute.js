import express from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/Usercontroller.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/add-users", createUser);
router.put("/edit-users/:id", updateUser);
router.delete("/delete-users/:id", deleteUser);

export default router;
