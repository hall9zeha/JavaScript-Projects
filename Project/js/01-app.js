const loadTxtBtn = document.querySelector('#cargarTxt');
loadTxtBtn.addEventListener('click', getData);

function getData(){
    const url = 'data/datos.txt';

    fetch(url)
        .then(response =>{
            console.log(response);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.url);
            console.log(response.type);

            return response.text();
        })
        .then(data =>{
            console.log(data);
        })
        .catch(error=>{
            console.log(error);
        })
}