import Constructora from "../models/Constructoras.js";

const obtenerConstructora = async (req, res) => {
    try {
        const constructoras = await Constructora.find();
        res.json(constructoras);
    } catch (error) {
        console.log(error.message);
    }
}

const agregarConstructora = async (req, res) => {
    const constructora = new Constructora(req.body);
    try {
        const nuevaConstructora = await constructora.save();
        res.json(nuevaConstructora);
    } catch (error) {
        console.log(error.message);
    }
}

const borrarConstructora = async (req, res) => {
    try {
        await Constructora.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error.message);
    }
}

const actualizarConstructora = async (req, res) => {
    try {
        const constructora = await Constructora.findOne({_id: req.params.id});

        if(req.body.nombre_constructora){
            constructora.nombre_constructora = req.body.nombre_constructora;
        }

        if(req.body.nit_constructora){
            constructora.nit_constructora = req.body.nit_constructora;
        }

        if(req.body.nombre_representante){
            constructora.nombre_representante = req.body.nombre_representante;
        }

        if(req.body.email_contacto){
            constructora.email_contacto = req.body.email_contacto;
        }

        if(req.body.telefono_contacto){
            constructora.telefono_contacto = req.body.telefono_contacto;
        }

        await constructora.save();
        res.send(constructora);
    } catch (error) {
        console.log(error.message);
        res.status(404);
        res.send({error: "Categoria no existe."});     
    }
}

const obtenerConstructoraById = async (req, res) => {
    try {
        const constructora = await Constructora.findOne({_id: req.params.id});
        res.json(constructora);
    } catch (error) {
        console.log(error.message);
    }
}

export {
    obtenerConstructora,
    agregarConstructora,
    borrarConstructora,
    actualizarConstructora,
    obtenerConstructoraById
}