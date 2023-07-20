import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

const sequelize = new Sequelize(
	`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
	{
		logging: false,
		native: false,
	}
);

// Función para verificar la conexión a la base de datos
const checkDatabaseConnection = async () => {
	try {
		await sequelize.authenticate();
		console.log("Conexión establecida correctamente con la base de datos.");
	} catch (error) {
		console.error("No se pudo conectar a la base de datos:", error);
	}
};

export { sequelize, checkDatabaseConnection };
