const result = document.querySelector('#resultado');
const form = document.querySelector('#formulario');
const paginationDiv= document.querySelector('#paginacion');

const perPage=20;
let totalPages;
let iterator;
let currentPage=1;

window.onload = ()=>{
    form.addEventListener('submit',validateForm);
}

function validateForm(e){
    e.preventDefault();

    const valueSearch=document.querySelector('#termino').value

    if(valueSearch ===''){
        showAlert('Escribe algo en el campo de búsqueda');
        return;
    }
    //Si el formulario no está vacío
    searchImages();

}

async function searchImages(){
    const valueSearch= document.querySelector('#termino').value

    const yourApiKey='your api key'
    const url=`https://pixabay.com/api/?key=${yourApiKey}&q=${valueSearch}&per_page=${perPage}&page=${currentPage}`;
    
    //Con fetch y promises
    // fetch(url)
    //     .then(result => result.json()) 
    //     .then(result => {

    //         totalPages = calcPages(result.totalHits)
    //         fillImagesInHtml(result.hits)
    //     })

    //con async await
    try {
        const response = await fetch(url);
        const result= await response.json();
        totalPages = calcPages(result.totalHits)
            fillImagesInHtml(result.hits)
    } catch (error) {
        console.log(error);
    }    


}

//usamos un generador para crear la numeración de páginas
function *createPagination(total){
    for(let i=1; i<=total; i++){
        yield i;
    }
}

function fillImagesInHtml(images){
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }

    images.forEach(image =>{
        const {previewURL,likes,views,largeImageURL} = image;
        result.innerHTML +=`
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class = "w-full" src="${previewURL}">
                    <div class="p-4">
                        <p class="font-bold">${likes} <span class="font-light">Me Gusta</span></p>
                        <p class="font-bold">${views} <span class="font-light">Veces vista</span></p>
                        <a 
                        class=" block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                        href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver imagen</a>
                    </div>
                </div>
            </div>
        `;
    })
    //limpiamos el paginador
    while(paginationDiv.firstChild){
        paginationDiv.removeChild(paginationDiv.firstChild);
    }
    printPaginator();
   
}

function printPaginator(){
    iterator = createPagination(totalPages);
    while(true){
        const {value, done} = iterator.next();
        if(done) return;

        const button = document.createElement('a');
        button.href = '#';
        button.dataset.pagina = value;
        button.textContent = value;
        button.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'uppercase','rounded');

        button.onclick = ()=>{
            currentPage= value;
            searchImages();
           
        }
        paginationDiv.appendChild(button);

    }
}
function calcPages(total){
    return parseInt(Math.ceil(total/perPage));
}
function showAlert(message){
    const alertP= document.querySelector('.alert');
    const alert = document.createElement('p');

    if(!alertP){
    alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded','max-w-lg', 'max-auto','mt-6','text-center','alert');
    alert.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class="clock sm:inline">${message}</span>  
    `;
    form.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 2000);
    }


}