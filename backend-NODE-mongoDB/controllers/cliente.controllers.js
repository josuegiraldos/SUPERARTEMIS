import Cliente from "../models/Clientes.js";

const obtenerCliente = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.log(error.message);
    }
}

const agregarCliente = async (req, res) => {
    const clientes = new Cliente(req.body);
    try {
        const nuevoCliente = await clientes.save();
        res.json(nuevoCliente);
    } catch (error) {
        console.log(error.message);
    }
}

const borrarCliente = async (req, res) => {
    try {
        await Cliente.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error.message);
    }
}

const actualizarCliente = async (req, res) => {
    try {
        const clienteArray = await Cliente.findOne({_id: req.params.id});
        if(req.body.compania){
            clienteArray.compania = req.body.compania;
        }

        if(req.body.contacto){
            clienteArray.contacto = req.body.contacto;
        }

        if(req.body.titulo){
            clienteArray.titulo = req.body.titulo;
        }

        if(req.body.direccion){
            clienteArray.direccion = req.body.direccion;
        }

        if(req.body.ciudad){
            clienteArray.ciudad = req.body.ciudad;
        }

        if(req.body.regiones){
            clienteArray.regiones = req.body.regiones;
        }

        if(req.body.codigoPostal){
            clienteArray.codigoPostal = req.body.codigoPostal;
        }

        if(req.body.pais){
            clienteArray.pais = req.body.pais;
        }

        if(req.body.telefono){
            clienteArray.telefono = req.body.telefono;
        }

        if(req.body.fax){
            clienteArray.fax = req.body.fax;
        }

        await clienteArray.save();
        res.send(clienteArray);
    } catch (error) {
        console.log(error.message);
        res.status(404);
        res.send({error: "Cliente no existe."});
    }
}

const obtenerClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findOne({_id: req.params.id});
        res.json(cliente);
    } catch (error) {
        console.log(error.message);
    }
}

export {
    obtenerCliente,
    agregarCliente,
    borrarCliente,
    actualizarCliente,
    obtenerClienteById
}

/* "compania": "Twitter",
"contacto": "ACTUALIZADO",
"titulo": "ACTUALIZADO",
"direccion": "ACTUALIZADO",
"ciudad": "ACTUALIZADO",
"regiones": "ACTUALIZADO",
"codigoPostal": "ACTUALIZADO+2",
"pais": "ACTUALIZADO",
"telefono": "ACTUALIZADO",
"fax": "ACTUALIZADO+2" */