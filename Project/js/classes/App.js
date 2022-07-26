import {infoDate, newDate} from '../functions.js';
import {petInput,ownerInput,phoneInput,dateInput,hourInput,signInput,formDate} from '../selectors.js';
class App{
    constructor(){
        this.initApp();
    }
    initApp(){
    petInput.addEventListener('change',infoDate);
    ownerInput.addEventListener('change',infoDate);
    phoneInput.addEventListener('change',infoDate);
    dateInput.addEventListener('change',infoDate);
    hourInput.addEventListener('change',infoDate);
    signInput.addEventListener('change',infoDate);

    formDate.addEventListener('submit',newDate);

    }
}

export default App;