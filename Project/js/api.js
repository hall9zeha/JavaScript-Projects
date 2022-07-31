import * as UI from './interfaz.js';

class Api {
    constructor(artist, song){
        this.artist=artist;
        this.song=song;
    }
    fetchApi(){
        const url =`https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;
        fetch(url)
            .then(result => result.json())
            .then(result =>{
                if(result.lyrics){
                const {lyrics} = result;
                UI.resultDiv.textContent=lyrics;
                UI.resultHead.textContent= `Letra de la canción: ${this.song}`;
                }
                else{
                    UI.messageDiv.textContent = 'La canción no existe intenta de otra forma';
                    UI.messageDiv.classList.add('error');
                    setTimeout(() => {
                        UI.messageDiv.textContent='';
                        UI.messageDiv.classList.remove('error');
                    }, 3000);
                }
            })

    }
}

export default Api;