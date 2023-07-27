const url = "http://localhost:7777/cliente";

export const getClientes = async () => {
    try {
        const result = await fetch(`${url}/all`);
        const clientes = await result.json();
        return clientes;
    } catch (error) {
        console.log(error.message);
    }
}

export const nuevoCliente = async (cliente) => {
    try {
        await fetch(`${url}/add`, {
            method: "POST",
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}

export const deleteCliente = async (id) => {
    try {
        await fetch(`${url}/del/${id}`, {
            method: "DELETE"
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}

export const updateCliente = async (id, updatedClient) => {
    try {
        await fetch(`${url}/upd/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedClient),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //window.location.href = "index.html";
    } catch (error) {
        
    }
}

export const getClienteId = async (id) => {
    try {
        const result = await fetch(`${url}/get/${id}`);
        const clienteById = await result.json();
        return clienteById;
    } catch (error) {
        console.log(error);
    }
}

/* export const getClientes = async () => {
    try {
        const result = await fetch(`${url}/all`);
        const clientes = await result.json();
        return clientes;
    } catch (error) {
        console.log(error.message);
    }
} */