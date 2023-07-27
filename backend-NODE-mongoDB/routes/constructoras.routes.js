import express from 'express';
import { obtenerConstructora, agregarConstructora, borrarConstructora, actualizarConstructora, obtenerConstructoraById } from '../controllers/constructora.controllers.js';

const router = express.Router();

router.get("/all", obtenerConstructora);
router.post("/add", agregarConstructora);
router.delete("/del/:id", borrarConstructora);
router.patch("/upd/:id", actualizarConstructora);
router.get("/get/:id", obtenerConstructoraById);

export default router;