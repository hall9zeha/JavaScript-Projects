//De callbackHell a promises

const countries =[];

const newCountrie = countrie => new Promise(resolve => {
    setTimeout(() => {
        countries.push(countrie);
        resolve(`Agregado ${countrie}`);
    }, 2000);
})

newCountrie('Francia')
    .then(result => {
        console.log(result)
        console.log(countries)
        return newCountrie('Bélgica');//se vuelve a llamar al promise 
    })
    .then(result =>{
        console.log(result)
        console.log(countries)
        return newCountrie('Italia');
    })
    .then(result =>{
        console.log(result)
        console.log(countries)
    })