import mongoose from "mongoose";
const clienteSchema = mongoose.Schema(
    {
        compania:{
            type: String,
            required: true,
            trim: true,
        },
        contacto:{
            type: String,
            required: true,
            trim: true,
        },
        titulo:{
            type: String,
            required: true,
            trim: true,
        },
        direccion:{
            type: String,
            required: true,
            trim: true,
        },
        ciudad:{
            type: String,
            required: true,
            trim: true,
        },
        regiones:{
            type: String,
            required: true,
            trim: true,
        },
        codigoPostal:{
            type: String,
            required: true,
            trim: true,
        },
        pais:{
            type: String,
            required: true,
            trim: true,
        },
        telefono:{
            type: String,
            required: true,
            trim: true,
        },
        fax:{
            type: String,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
);

const Cliente = mongoose.model("Cliente", clienteSchema);

export default Cliente;