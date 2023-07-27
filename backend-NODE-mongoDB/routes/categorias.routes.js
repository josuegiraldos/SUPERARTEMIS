import express from "express";
import { obtenerCategoria, agregarCategoria, borrarCategoria, actualizarCategoria, obtenerCategoriaById } from "../controllers/categoria.controllers.js";

const router = express.Router();

router.get("/all", obtenerCategoria);
router.post("/add", agregarCategoria);
router.delete("/del/:id", borrarCategoria);
router.patch("/upd/:id", actualizarCategoria);
router.get("/get/:id", obtenerCategoriaById);

export default router;