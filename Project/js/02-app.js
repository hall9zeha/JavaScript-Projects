//Usando fetch con archivo json

const loadJsonBtn = document.querySelector('#cargarJSON');
loadJsonBtn.addEventListener('click', getData);

function getData(){
    const url = 'data/empleado.json';
    fetch(url)
        .then(result => result.json()) //retornamos el resultado para que sea de tipo Json
        .then(result => showHtml(result))


}

function showHtml({empresa, id, nombre, trabajo}){
    const content = document.querySelector('.contenido');

    content.innerHTML = `
        <p>Empleado: ${nombre} </p>
        <p>Empleado: ${id} </p>
        <p>Empleado: ${empresa} </p>
        <p>Empleado: ${trabajo} </p>
    `;

}