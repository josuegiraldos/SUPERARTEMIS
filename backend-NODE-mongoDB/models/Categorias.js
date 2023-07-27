import mongoose from "mongoose";
const categoriaSchema = mongoose.Schema(
    {
        nombre_categoria: {
            type: String,
            required: true,
            trim: true
        },
        descripcion_categoria: {
            type: String,
            required: true,
            trim: true
        },
        img_categoria: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

const Categoria = mongoose.model("Categoria", categoriaSchema);

export default Categoria;