import mongoose from "mongoose";
const empleadoSchema = mongoose.Schema(
    {
        nombre_empleado:{
            type: String,
            required: true,
            trim: true
        },
        email_empleado:{
            type: String,
            required: true,
            trim: true
        },
        celular_empleado:{
            type: String,
            required: true,
            trim: true
        },
        password_empleado:{
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Empleados = mongoose.model("Empleado", empleadoSchema);

export default Empleados;

/* nombre_empleado
email_empleado
celular_empleado
password_empleado */