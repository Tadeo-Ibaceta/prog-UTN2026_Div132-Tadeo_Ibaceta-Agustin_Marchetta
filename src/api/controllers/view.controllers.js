/*================================
    Controladores de vistas
================================*/

import DoctorModels from "../models/doctor.models.js";
import { join, __dirname } from "../utils/index.js";


////////////////////
// Vista principal
export const indexView = async (req, res) => {
    try {

        const [rows] = await DoctorModels.selectAllDoctors();

        res.render("index", {
            title: "Dashboard",
            about: "Nuestros doctores",
            productsArray: rows
        });

    } catch (error) {
        console.log("Error obteniendo informacion", error.message);

        res.status(500).json({
            message: "Error interno obteniendo la informacion"
        });

    }
}



////////////////////
// Vista obtener doctor
export const getDoctorView = (req, res) => {
    res.render("get", {
        title: "Consultar",
        about: "Consultar doctor por id: "
    });
}



////////////////////
// Vista crear doctor
export const createDoctorView = (req, res) => {
    res.render("post", {
        title: "Crear",
        about: "Crear doctor"
    });
}



////////////////////
// Vista actualizar doctor
export const updateDoctorView = (req, res) => {
    res.render("put", {
        title: "Modificar",
        about: "Consultar doctor por id: "
    });
}



////////////////////
// Vista eliminar producto
export const deleteDoctorView = (req, res) => {
    res.render("delete", {
        title: "Eliminar",
        about: "Consultar doctor por id: "
    });
}