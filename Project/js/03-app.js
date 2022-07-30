const loadJsonArray = document.querySelector('#cargarJSONArray');
const content = document.querySelector('#contenido');
loadJsonArray.addEventListener('click', getData);

function getData(){
    const url = 'data/empleados.json';
    fetch(url)
        .then(result =>  result.json())
        .then(result => showHtml(result))
}

function showHtml(employers){
    employers.forEach(emp =>{
        const {id,nombre,empresa,trabajo} = emp;
        const employer = document.createElement('p');
        employer.innerHTML=`
        Id: ${id}
        Nombre: ${nombre}
        Empresa: ${empresa}
        Trabajo: ${trabajo}
        `;
        content.appendChild(employer)

    })
}