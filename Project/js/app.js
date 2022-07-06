//variables
const result=document.querySelector('#resultado');
const year=document.querySelector('#year');
//
const trademark = document.querySelector('#marca');
const yearSelect=document.querySelector('#year');
const minimo=document.querySelector('#minimo');
const maximo=document.querySelector('#maximo');
const doors=document.querySelector('#puertas');
const transmission=document.querySelector('#transmision');
const color=document.querySelector('#color');





const max = new Date().getFullYear();
let min = max - 10;



//Generar un objeto con la búsqueda
const searchData={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
}

//Eventos para cada elemento de selección
trademark.addEventListener('change', e=>{
    searchData.marca=e.target.value;
});
yearSelect.addEventListener('change', e=>{
    searchData.year=e.target.value;
});
minimo.addEventListener('change', e=>{
    searchData.minimo=e.target.value;
});
maximo.addEventListener('change',e=>{
    searchData.maximo=e.target.value;
})
doors.addEventListener('change',e=>{
    searchData.puertas=e.target.value;
});
transmission.addEventListener('change', e=>{
    searchData.transmision=e.target.value;
});
color.addEventListener('change',e=>{
    searchData.color=e.target.value;
});


//Eventos
document.addEventListener('DOMContentLoaded', ()=>{
    showCars();
    populateYears();
});


//Funciones
function populateYears(){
   
    for(let i=max; i>min; i--){
        const yearHtml=document.createElement('option');
        yearHtml.textContent=i
        yearHtml.value=i
        year.appendChild(yearHtml);
    }

}

function showCars(){
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHtml = document.createElement('p');
        autoHtml.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} transmision: ${transmision} precio: ${precio}  ${color} 
        `;
        result.appendChild(autoHtml);
    });
}