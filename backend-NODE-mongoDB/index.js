import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/config.js';
import categoriasRouter from './routes/categorias.routes.js';
import clientesRouter from './routes/clientes.routes.js'
import constructorasRouter from "./routes/constructoras.routes.js";
import empleadosRouter from "./routes/empleados.routes.js";
import cors from "cors";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());

const PORT = process.env.PORT;

conectarDB();

const corsOption = {
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}

app.use(cors(corsOption));

app.listen(PORT, () => {
    console.log(`Server web is listening on ${PORT}`);
})

app.use("/categoria", categoriasRouter);
app.use("/cliente", clientesRouter);
app.use("/constructora", constructorasRouter);
app.use("/empleado", empleadosRouter);