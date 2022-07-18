function Secure(trademark, year, type){
    this.trademark=trademark;
    this.year=year;
    this.type=type;
}

function UI(){}

UI.prototype.fillOptions = () =>{
    const max = new Date().getUTCFullYear(),
    min = max - 20;

    const selectYear = document.querySelector('#year');
    for (let i=max; i>min; i--){
        let option = document.createElement('option');
        option.value=i;
        option.textContent=i;
        selectYear.appendChild(option);
    }

}
UI.prototype.showMessage =(message, type)=>{
    const div = document.createElement('div');
    if(type==='error'){
        div.classList.add('error');

    }else{
        div.classList.add('correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent=message

    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(div,document.querySelector('#resultado'));
    setTimeout(() => {
        div.remove()
    }, 2000);

}
UI.prototype.showResult = (secure,total) =>{
    const div = document.createElement('div');
    const {trademark, year,type} =secure;

    let nameTrademark;
    switch(trademark){
        case '1':
            nameTrademark="Americano";
            break;
        case '2':
            nameTrademark="Asiático";
            break;
        case '3':
            nameTrademark="Europeo";
            break;
        default:
            break;
    }
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class = "header">Tu resumen</p>
        <p class="font-bold"><span class=''font-normal>Total: ${nameTrademark}</span></p>
        <p class="font-bold"><span class=''font-normal>Total: ${year}</span></p>
        <p class="font-bold"><span class=''font-normal>Total: ${type}</span></p>
        <p class="font-bold"><span class=''font-normal>Total: ${total}</span></p>

    `;

    const divResult= document.querySelector('#resultado');
    

    const spinner=document.querySelector('#cargando');
    spinner.style.display ='block';

    setTimeout(() => {
        spinner.style.display='none';
        divResult.appendChild(div);
    }, 2000);
}


Secure.prototype.quoteSecure = function(){
    let amount;
    const base = 2000;
    switch(this.trademark){
        case '1':
            amount= base * 1.15;
            break;
        case '2':
            amount = base * 1.05;
            break;
        case '3':
            amount = base * 1.35;
            break;
        default:
            break;

    }
    const diff = new Date().getFullYear() - this.year;

    amount -=((diff * 3) * amount)/100;
    console.log(amount);
    if(this.type==='basico'){
        amount *= 1.30;

    }
    else{
        amount *= 1.50;
    }
    return amount;
}
const ui=new UI();

document.addEventListener('DOMContentLoaded',()=>{
    ui.fillOptions();
});

eventListeners();
function eventListeners(){
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', insurance);
}

function insurance(e){
    e.preventDefault();
    const trademark = document.querySelector("#marca").value;
    const year=document.querySelector("#year").value;
    const type=document.querySelector('input[name="tipo"]:checked').value

    if(trademark ==='' || year ==='' || type===''){
            ui.showMessage('todos los campos son obligatorios', 'error');
            return;
    }
    ui.showMessage('Cotizando','success');

    const results=document.querySelector('#resultado div');
    if(results !=null){
        results.remove();
    }

    const secure=  new Secure(trademark,year,type);
    const total=secure.quoteSecure();
    ui.showResult(secure,total);




}
