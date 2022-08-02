const cryptoCoinsSelect = document.querySelector('#criptomonedas');
const form= document.querySelector('#formulario');
const coinSelect=document.querySelector('#moneda');
const resultDiv=document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () =>{
    checkCoins();
    form.addEventListener('submit',makeConversion);
    coinSelect.addEventListener('change',readValue);
    cryptoCoinsSelect.addEventListener('change',readValue);
    
})

const objSearch ={
    coin:'',
    cryptoCurrency:''
}

const getCoins = cryptoCurrency => new Promise(resolve =>{
    resolve(cryptoCurrency);
})
function readValue(e){
    objSearch[e.target.name]=e.target.value;
    console.log(objSearch);
}
//Con fetch y promises
// function checkCoins(){
//     const url=`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;


//     fetch(url)
//         .then(result => result.json())
//         .then(result => getCoins(result.Data))
//         .then(cryptoCurrency => selectCryptoCurrency(cryptoCurrency))
// }
//con async await
async function checkCoins(){
    const url=`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        const cryptoCurrency = await getCoins(result.Data);

        selectCryptoCurrency(cryptoCurrency);

    } catch (error) {
        console.log(error);
    }
}

function selectCryptoCurrency(coins){
         
        coins.forEach(coin =>{
            const{CoinInfo:{FullName, Name}} = coin;
            const option = document.createElement('option');
            option.value=Name;
            option.textContent = FullName;
            cryptoCoinsSelect.appendChild(option);
        })
    
}
function makeConversion(e){
    e.preventDefault();
    const{coin,cryptoCurrency} = objSearch;
    if(coin ==='' ||cryptoCurrency===''){
        showAlert('Ambos campos son obligatorios');
        return;
    }
    fetchApiConvert();


}

function showAlert(message){
    const alert= document.querySelector('.error');
    if(!alert){
        const alertDiv= document.createElement('div');
        alertDiv.classList.add('error');
        alertDiv.textContent=message;
        form.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 2000);
    }
}
//Con fetch y promises
// function fetchApiConvert(){
//     const {coin, cryptoCurrency} = objSearch;
//     showLoading();
//     const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${coin}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(response => {
//             fillHtml(  response.DISPLAY[cryptoCurrency][coin] );
//         })

// }
//Con async await
async function fetchApiConvert(){
    const {coin, cryptoCurrency} = objSearch;
    showLoading();
    const url=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${coin}`;

    try {
        const response = await fetch(url);
        const result = await response.json();

        fillHtml(result.DISPLAY[cryptoCurrency][coin])

    } catch (error) {
        console.log(error);
    }
}

function fillHtml(response){
    const{PRICE,HIGHDAY, LOWDAY,CHANGEPCT24HOUR,LASTUPDATE} = response
    clearHtml()
    const price =document.createElement('p');
    price.classList.add('precio');
    price.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const hightPrice = document.createElement('p');
    hightPrice.innerHTML = `<p>Precio más alto del día <span>${HIGHDAY}</span></p>`

    const lowPrice = document.createElement('p');
    lowPrice.innerHTML = `<p>Precio más bajo del día <span>${LOWDAY}</span></p>`

    const lastHour = document.createElement('p');
    lastHour.innerHTML = `<p>Variación últimas 24 horas <span>${CHANGEPCT24HOUR}%</span></p>`

    const lastUpdate = document.createElement('p');
    lastUpdate.innerHTML = `<p>Última actualización <span>${LASTUPDATE}</span></p>`

    resultDiv.appendChild(price);
    resultDiv.appendChild(hightPrice);
    resultDiv.appendChild(lowPrice);
    resultDiv.appendChild(lastHour);
    resultDiv.appendChild(lastUpdate);

}

function clearHtml(){
    while(resultDiv.firstChild){
        resultDiv.removeChild(resultDiv.firstChild);
    }
}

function showLoading(){
    clearHtml()
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML=`
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;
    resultDiv.appendChild(spinner);
}
