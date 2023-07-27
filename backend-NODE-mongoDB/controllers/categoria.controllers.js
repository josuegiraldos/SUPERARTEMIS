import Categoria from "../models/Categorias.js";

const obtenerCategoria = async (req, res) => {
    try {
        const categorias = await Categoria.find();
        res.json(categorias);   
    } catch (error) {
        console.log(error.message);
    }
}

const agregarCategoria = async (req, res) => {
    const categorias = new Categoria(req.body);
    try {
        const nuevaCategoria = await categorias.save();
        res.json(nuevaCategoria);
    } catch (error) {
        console.log(error.message);
    }
}

const borrarCategoria = async (req, res) => {
    try {
        await Categoria.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error.message);
    }
}

const actualizarCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findOne({_id: req.params.id});
        if(req.body.nombre_categoria){
            categoria.nombre_categoria = req.body.nombre_categoria;
        }

        if (req.body.descripcion_categoria){
            categoria.descripcion_categoria = req.body.descripcion_categoria;
        }

        if (req.body.img_categoria) {
            categoria.img_categoria = req.body.img_categoria;
        }

        await categoria.save();
        res.send(categoria);
    } catch (error) {
        res.status(404);
        res.send({error: "Categoria no existe."});
        console.log(error.message);       
    }
}

const obtenerCategoriaById = async (req, res) => {
    try {
        const categoria = await Categoria.findOne({_id: req.params.id});
        res.json(categoria);
    } catch (error) {
        console.log(error.message);
    }
}

export {
    obtenerCategoria,
    agregarCategoria,
    borrarCategoria,
    actualizarCategoria,
    obtenerCategoriaById
}