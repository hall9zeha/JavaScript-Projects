//Reconocimiento de voz no lo soportan todos los navegadores como firefox y safari

const out = document.querySelector('#salida');
const mic = document.querySelector('#microfono');

mic.addEventListener('click',initSpeechApi);

function initSpeechApi(){
    const speechRecognition = webkitSpeechRecognition;
    const recognition = new speechRecognition();

    //iniciamos 
    recognition.start();
    recognition.onstart = function(){
        out.classList.add('mostrar');
        out.textContent = 'Escuchando...';
    }
    recognition.onspeechend = function(){
        out.textContent='Se dejó de grabar';
        recognition.stop();
    }
    recognition.onresult =function(e){
        console.log(e.results[0],[0]);
        const {confidence,transcript}= e.results[0][0];
        const speech = document.createElement('p');
        speech.innerHTML=`Grabado: ${transcript}`;

        const security = document.createElement('p');
        security.innerHTML=`Seguridad de la transcripción: ${parseInt(confidence)*100} %`;

        out.appendChild(speech);
        out.appendChild(security)


    }

}

