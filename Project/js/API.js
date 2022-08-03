//!!!Para usar este proyecto instalar nodejs  y json server npm, para crear nuestra propia api sencillade clientes
const url = 'http://localhost:4000/clientes';

export const newClient = async client=>{
    try {
        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(client),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

export const getClients = async()=>{
    try {
        const result = await fetch(url);
        const clients = await result.json();
        return clients;
    } catch (error) {
        console.log(error);
    }
}

export const deleteRegister = async idClient =>{
    try {
        await fetch(`${url}/${idClient}`,{
            method: 'DELETE'
        });
    } catch (error) {
        console.log(error)
    }
}

export const getClient = async idClient =>{
    try {
        const result = await fetch(`${url}/${idClient}`);
        const client = await result.json();
        return client;
    } catch (error) {
        console.log(error);
    }
}
export const updateClient =  async client => {
    try {
        await fetch(`${url}/${client.id}`,{
            method:'PUT',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}