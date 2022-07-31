const container = document.querySelector('.container');
const result = document.querySelector('#resultado');
const form = document.querySelector('#formulario')

window.addEventListener('load', ()=>{
    form.addEventListener('submit',searchWeather);
})


function searchWeather(e){
    e.preventDefault();
    //validamos el formulario

    const city = document.querySelector('#ciudad').value;
    const country = document.querySelector('#pais').value;

    if (city === '' || country === ''){
        showError('Todos los campos son obligatorios');
        return;
    }
    fetchApiWeather(city, country);
}

function showError(message){

    const alertDiv = document.querySelector('.bg-red-100');
    if(!alertDiv){
        const alert = document.createElement('div');

        alert.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-md','mx-auto','mt-6','text-center');
        alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${message}</span>
        `;
    
        container.appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000);
    }

    
}
function fetchApiWeather(city,country){
    const yourApiKey='put your api key ';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${yourApiKey}`;
    spinner();
    fetch(url)
        .then(result =>{
            return result.json();
        })
        .then(result =>{
            clearHtml()
            if(result.cod === "404"){
                showError('Locación no encontrada');
                return;
            }
            showWeatherResult(result);
        })
        .catch(error =>{
            showError('Hobo un error en la llamada');
        })

}

function showWeatherResult(weather){
    const {name, main:{temp, temp_max, temp_min}}= weather;
    
    console.log(weather);
    const currentTemp = convertKelvintoCent(temp);
    const tempMax = convertKelvintoCent(temp_max);
    const tempMin = convertKelvintoCent(temp_min);

    const nameCity = document.createElement('p');
    nameCity.innerHTML = `El clima en ${name}`;
    nameCity.classList.add('font-bold', 'text-2xl');

    const current = document.createElement('p');
    current.innerHTML = `${currentTemp} &#8451`;
    current.classList.add('font-bold','text-6xl');

    const max = document.createElement('p');
    max.innerHTML = `Max: ${tempMax} &#8451`;
    max.classList.add('font-bold', 'text-xl');

    const min = document.createElement('p');
    min.innerHTML= `Min: ${tempMin} &#8451`;
    min.classList.add('font-bold', 'text-xl');

    const divResult = document.createElement('div');
    divResult.classList.add('text-center','text-white');
    divResult.appendChild(nameCity);
    divResult.appendChild(current);
    divResult.appendChild(max);
    divResult.appendChild(min);
    result.appendChild(divResult);
}

function convertKelvintoCent(temp){
    return parseInt(temp - 273.15);
}

function clearHtml(){
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
}
function spinner(){

    clearHtml()
    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML=`
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
    `;
    result.appendChild(divSpinner);
}
