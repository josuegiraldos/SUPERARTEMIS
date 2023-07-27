import mongoose from 'mongoose';
const constructoraSchema = mongoose.Schema(
    {
        nombre_constructora:{
            type: String,
            required: true,
            trim: true
        },
        nit_constructora:{
            type: String,
            required: true,
            trim: true
        },
        nombre_representante:{
            type: String,
            required: true,
            trim: true
        },
        email_contacto:{
            type: String,
            required: true,
            trim: true
        },
        telefono_contacto:{
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Constructora = mongoose.model("Constructora", constructoraSchema);

export default Constructora;