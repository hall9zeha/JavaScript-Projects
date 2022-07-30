const loadApiBtn = document.querySelector('#cargarAPI');
loadApiBtn.addEventListener('click', getData);

function getData(){
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(response => response.json())
        .then(response => showHtml(response))
}

function showHtml(response){
    const content =  document.querySelector('.contenido');

    let html = '';

    response.forEach(profile =>{
        const {author, post_url} = profile;

        html +=`
            <p> Autor: ${author}</p>
            <a href="${post_url}" target="_blank"> Ver imagen de perfil</a>

        `   
        
    })
    content.innerHTML= html 
}