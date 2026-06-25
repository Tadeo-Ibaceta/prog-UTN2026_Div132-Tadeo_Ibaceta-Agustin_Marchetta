/*========================
    Rutas de vistas
========================*/

import { Router } from "express";
import { join, __dirname } from "../utils/index.js";
import { createDoctorView, deleteDoctorView, getDoctorView, indexView, updateDoctorView } from "../controllers/view.controllers.js";

const router = Router();

////////////////////
// Vista principal
router.get("/index", indexView);


////////////////////
// Vista obtener doctor
router.get("/consultar", getDoctorView);


////////////////////
// Vista crear doctor
router.get("/crear", createDoctorView);


////////////////////
// Vista modificar doctor
router.get("/modificar", updateDoctorView);


////////////////////
// Vista eliminar doctor
router.get("/eliminar", deleteDoctorView);

export default router;