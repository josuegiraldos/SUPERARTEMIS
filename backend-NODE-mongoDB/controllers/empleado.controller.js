import Empleados from "../models/Empleados.js";

const obtenerEmpleado = async (req, res) => {
    try {
        const empleados = await Empleados.find();
        res.json(empleados);
    } catch (error) {
        console.log(error.message);
    }
}

const agregarEmpleado = async (req, res) => {
    const empleados = new Empleados(req.body);
    try {
        const nuevoEmpleado = await empleados.save();
        res.json(nuevoEmpleado);
    } catch (error) {
        console.log(error.message);
    }
}

const borrarEmpleado = async (req, res) => {
    try {
        await Empleados.deleteOne({_id: req.params.id});
        res.status(204).send();
    } catch (error) {
        console.log(error.message);
    }
}

const actualizarEmpleado = async (req, res) => {
    try {
        const empleado = await Empleados.findOne({_id: req.params.id});

        if(req.body.nombre_empleado){
            empleado.nombre_empleado = req.body.nombre_empleado;
        }

        if(req.body.email_empleado){
            empleado.email_empleado = req.body.email_empleado;
        }

        if(req.body.celular_empleado){
            empleado.celular_empleado = req.body.celular_empleado;
        }

        if(req.body.password_empleado){
            empleado.password_empleado = req.body.password_empleado;
        }

        await empleado.save();
        res.send(empleado);
    } catch (error) {
        console.log(error.message);
        res.status(404);
        res.send({error: "Empleado no existe."});
    }
}

const obtenerEmpleadoById = async (req, res) => {
    try {
        const empleado = await Empleados.findOne({_id: req.params.id});
        res.json(empleado);
    } catch (error) {
        console.log(error.message);
    }
}

export {
    obtenerEmpleado,
    agregarEmpleado,
    borrarEmpleado,
    actualizarEmpleado,
    obtenerEmpleadoById
}