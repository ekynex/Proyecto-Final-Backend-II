import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function connectDB(uri) {
    try {
        await mongoose.connect(uri); // Eliminamos las opciones obsoletas
        console.log("✅ Conexión exitosa a MongoDB Atlas");
    } catch (error) {
        console.error("❌ Error al conectar la base de datos:", error.message);
        process.exit(1);
    }
}
