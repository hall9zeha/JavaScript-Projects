//Module pattern - patrón de organización
//forma antigua antes de ES6

const module1 = (function(){
    const name="Martha";

    function hello(){
        console.log(`Hola ${name}`);
    }

    return {
        name,
        hello
    }
})();

//La forma más reciente y recomendada

// export const module2 = () =>{
//     const name1="Barry";
//     console.log(`hello ${name1}`)
// }


