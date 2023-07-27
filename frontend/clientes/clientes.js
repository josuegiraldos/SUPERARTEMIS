import { getClientes, deleteCliente, nuevoCliente, getClienteId, updateCliente } from "./api.js";

const contenedor = document.querySelector(".lista");
const formulario = document.querySelector("#formulario-cliente");
document.addEventListener("DOMContentLoaded", showClientes);
contenedor.addEventListener("click", confirmDelete);
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validateClient(e);
});

async function showClientes(){
    const clientes = await getClientes();
    clientes.forEach(cliente => {
        const {_id, compania, contacto, titulo, direccion, ciudad, regiones, codigoPostal, pais, telefono, fax} = cliente;
        const rows = document.createElement('tr');
        rows.innerHTML = `
        <th scope="row">${_id}</th>
        <td>${compania}</td>
        <td>${contacto}</td>
        <td>${titulo}</td>
        <td>${direccion}</td>
        <td>${ciudad}</td>
        <td>${regiones}</td>
        <td>${codigoPostal}</td>
        <td>${pais}</td>
        <td><button type="button" id="${_id}" class="update btn btn-warning" data-bs-toggle="modal"
        data-bs-target="#clientUpdated">UPDATE</button></td>
        <td><button type="button" id="${_id}" class="btn btn-danger delete">DELETE</button></td>
        `;
        contenedor.appendChild(rows);
    });
}

function validateClient(e){
    e.preventDefault();
    const compania = document.querySelector('#compania').value;
    const contacto = document.querySelector('#contacto').value;
    const titulo = document.querySelector('#titulo').value;
    const direccion = document.querySelector('#direccion').value;
    const ciudad = document.querySelector('#ciudad').value;
    const regiones = document.querySelector('#regiones').value;
    const codigoPostal = document.querySelector('#codigoPostal').value;
    const pais = document.querySelector('#pais').value;
    const telefono = document.querySelector('#telefono').value;
    const fax = document.querySelector('#fax').value;

    const cliente = {
        compania,
        contacto,
        titulo,
        direccion,
        ciudad,
        regiones,
        codigoPostal,
        pais,
        telefono,
        fax
    }

    if(validate(cliente)){
        alert('Todos los campos son obligatorios.');
        return;
    }
    nuevoCliente(cliente);
}

async function confirmDelete(e){
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        const id = e.target.getAttribute('id');
        console.log(id);
        const confirmar = confirm('¿Desea eliminar el cliente seleccionado?');
        if (confirmar) {
            deleteCliente(id);
        }
    }
    else if(e.target.classList.contains('update')){

        const id = e.target.getAttribute('id');
        console.log(id);
        const clienteId = await getClienteId(id);
        console.log(clienteId);
        
        const companiaUpdate = document.getElementById("companiaUpdate");
        companiaUpdate.placeholder = clienteId.compania;

        const contactoUpdate = document.getElementById("contactoUpdate");
        contactoUpdate.placeholder = clienteId.contacto;

        const tituloUpdate = document.getElementById("tituloUpdate");
        tituloUpdate.placeholder = clienteId.titulo;

        const direccionUpdate = document.getElementById("direccionUpdate");
        direccionUpdate.placeholder = clienteId.direccion;

        const ciudadUpdate = document.getElementById("ciudadUpdate");
        ciudadUpdate.placeholder = clienteId.ciudad;

        const regionUpdate = document.getElementById("regionesUpdate");
        regionUpdate.placeholder = clienteId.regiones;

        const codigoPostalUpdate = document.getElementById("codigoPostalUpdate");
        codigoPostalUpdate.placeholder = clienteId.codigoPostal;

        const paisUpdate = document.getElementById("paisUpdate");
        paisUpdate.placeholder = clienteId.pais;

        const telefonoUpdate = document.getElementById("telefonoUpdate");
        telefonoUpdate.placeholder = clienteId.telefono;

        const faxUpdate = document.getElementById("faxUpdate");
        faxUpdate.placeholder = clienteId.fax;
        
        const updatedClient = {
            compania: companiaUpdate,
            contacto: contactoUpdate,
            titulo: tituloUpdate,
            direccion: direccionUpdate,
            ciudad: ciudadUpdate,
            regiones: regionUpdate,
            codigoPostal: codigoPostalUpdate,
            pais: paisUpdate,
            telefono: telefonoUpdate,
            fax: faxUpdate
        }
        updateCliente(id, updatedClient);
    }
}

function validate(obj){
    return !Object.values(obj).every(element => element !== '');
}