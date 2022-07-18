const form = document.querySelector('#formulario');
const list= document.querySelector('#lista-tweets');

let tweets = [];
eventListeners();

function eventListeners(){
    form.addEventListener('submit', addTweet);
    document.addEventListener('DOMContentLoaded',()=>{
        tweets= JSON.parse(localStorage.getItem('tweets')) || [];//si no encuetra tweets en el storage le asignará un array vacío
        createHtml();
    });
}

function addTweet(e){
    clearHtml();
    e.preventDefault();

    const message= document.querySelector('#tweet').value;

    if(message===''){
        showError("debes escribir algún mensaje");
        return;
    }
  
    const tweetObj={
        id: Date.now(),
        message//ya que la llave como su valor serían(message: message) los mismos javascript nos permite poner solo uno
    }

    tweets= [...tweets, tweetObj]
   
    createHtml();
    form.reset();

}

function showError(error){
    const paragraph = document.createElement('p');

    paragraph.textContent=error;
    paragraph.classList.add('error');

    const content=document.querySelector('#contenido');
    content.appendChild(paragraph);
    setTimeout(() => {
        paragraph.remove();
    },2000);
}

function createHtml(){
    if(tweets.length>0){
        tweets.forEach(tweet=>{
            const btnDelete= document.createElement('a');
            btnDelete.classList.add('borrar-tweet');
            btnDelete.innerText='X';
            btnDelete.onclick= ()=>{
                deleteTweet(tweet.id);
            }

            const li=document.createElement('li');
            li.innerText=tweet.message;
            li.appendChild(btnDelete);
            list.appendChild(li);
        })
    }
    syncStorage();
}
function clearHtml(){
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }
    syncStorage()
}
function syncStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));

}
function deleteTweet(id){
    clearHtml();
    tweets=tweets.filter(tweet=> tweet.id !== id);
    createHtml();
}