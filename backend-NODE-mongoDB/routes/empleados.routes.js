import express from 'express';
import { obtenerEmpleado, agregarEmpleado, borrarEmpleado, actualizarEmpleado, obtenerEmpleadoById } from '../controllers/empleado.controller.js';

const router = express.Router();

router.get("/all", obtenerEmpleado);
router.post("/add", agregarEmpleado);
router.delete("/del/:id", borrarEmpleado);
router.patch("/upd/:id", actualizarEmpleado);
router.get("/get/:id", obtenerEmpleadoById);

export default router;