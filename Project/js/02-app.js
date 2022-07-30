//ejemplo de callbackHell anidamiento ineficiente de callback que se puede solucionar con promises

(function(){

    const countries= [];

    function addCountrie(countrie, callback){
        countries.push(countrie);
        console.log(`pais ${countrie} agregado`);
    }

    function showCountries(){
        console.table(countries);

    }

    function initCallBackHell(){
        setTimeout(() => {
            addCountrie('Rusia',showCountries);
            setTimeout(() => {
                addCountrie('EEUU',showCountries);
                setTimeout(() => {
                    addCountrie('China',showCountries);
                }, 3000);
            }, 3000);
        }, 3000);
    }

   
    initCallBackHell();

})();