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
    filterAuto();
});
yearSelect.addEventListener('change', e=>{
    searchData.year=e.target.value;
    filterAuto();
});
minimo.addEventListener('change', e=>{
    searchData.minimo=e.target.value;
    filterAuto();
});
maximo.addEventListener('change',e=>{
    searchData.maximo=e.target.value;
    filterAuto();
})
doors.addEventListener('change',e=>{
    searchData.puertas=parseInt(e.target.value);
    filterAuto();
});
transmission.addEventListener('change', e=>{
    searchData.transmision=e.target.value;
    filterAuto();
});
color.addEventListener('change',e=>{
    searchData.color=e.target.value;
    filterAuto();
});


//Eventos
document.addEventListener('DOMContentLoaded', ()=>{
    showCars(autos);
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

function showCars(autos){
    clearHtml();
    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHtml = document.createElement('p');
        autoHtml.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} transmision: ${transmision} precio: ${precio}  ${color} 
        `;
        result.appendChild(autoHtml);
    });
}

function clearHtml(){
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
}

//Función para filtrar los autos por marca
function filterAuto(){
    const autoResult=autos.filter(filterTrademark).filter(filterYear).filter(filterMinPrice).filter(filterMaxPrice)
    .filter(filterDoors).filter(filterTransmission).filter(filterColor);//el parámetro que sería auto se pasa automáticamente 
    //en filterTrademark no hay necesidad de especificarlo
    if(autoResult.length){
    showCars(autoResult);
    }
    else{
        noResultMessage();
    }
}

function noResultMessage(){
    clearHtml();
    const noResultMsg=document.createElement('div');
    noResultMsg.classList.add('alerta','error');
    noResultMsg.textContent='No hay autos con esas características';
    result.appendChild(noResultMsg);
}
//
function filterTrademark(auto){
    const {marca} = searchData;
    if(marca){
        return auto.marca===marca;
    }
    return auto;
}
function filterYear(auto){
    const {year} = searchData;
    if(year){
        //return auto.year==year;//podemos hacerlo así sin la comparación estricta ===, ya que se
        //está comparando string con un entero.
        return auto.year=== parseInt(year);//o puede ser parseando el string
    }
    return auto;
}
function filterMinPrice(auto){
    const {minimo}= searchData;
    if(minimo){
        return auto.precio>=minimo;

    }
    return auto;
}
function filterMaxPrice(auto){
    const {maximo}= searchData;
    if(maximo){
        return auto.precio<=maximo;
    }
    return auto;
}
function filterDoors(auto){
    const {puertas} = searchData;
    if(puertas){
        return auto.puertas===puertas;
    }
    return auto;
}
function filterTransmission(auto){
    const {transmision} = searchData;
    if(transmision){
        return auto.transmision===transmision;
    }
    return auto;
}
function filterColor(auto){
    const {color} = searchData;
    if(color){
        return auto.color===color;
    }
    return auto;
}