import express from 'express';
import { obtenerCliente, agregarCliente, borrarCliente, actualizarCliente, obtenerClienteById } from '../controllers/cliente.controllers.js';

const router = express.Router();

router.get("/all", obtenerCliente);
router.post("/add", agregarCliente);
router.delete("/del/:id", borrarCliente);
router.patch("/upd/:id", actualizarCliente);
router.get("/get/:id", obtenerClienteById)

export default router;