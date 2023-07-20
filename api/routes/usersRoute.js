import express from "express";
const router = express.Router();
import User from "../models/user.js";

// Ruta para obtener todos los usuarios (GET /api/users)
router.get("/getUser", async (req, res) => {
	try {
		const users = await User.findAll();
		res.json(users);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

// Ruta para crear un nuevo usuario (POST /api/users)
router.post("/create", async (req, res) => {
	try {
		const { name, email } = req.body;
		const newUser = await User.create({ name, email });
		res.json(newUser);
	} catch (error) {
		res.status(500).json({ error });
	}
});

// Ruta para eliminar todos los usuarios (DELETE /api/users/deleteAll)
router.delete("/deleteAll", async (req, res) => {
	try {
		await User.destroy({ where: {} });
		res.json({ message: "All users deleted successfully" });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
});

export default router;
