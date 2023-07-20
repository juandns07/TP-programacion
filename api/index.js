import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/usersRoute.js";
import { checkDatabaseConnection } from "./db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
	cors({
		origin: "https://tp-programacion.vercel.app",
	})
);

// Rutas
app.use("/api/users", userRoutes);

// Verificar conexión a la base de datos antes de iniciar el servidor
checkDatabaseConnection()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Servidor iniciado en el puerto ${PORT}`);
		});
	})
	.catch((error) => {
		console.error("Error al conectar a la base de datos:", error);
	});
