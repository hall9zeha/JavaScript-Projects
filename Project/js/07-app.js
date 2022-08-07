//Namespace pattern - patrón de organización 
const restaurantApp = {}

restaurantApp.dishes =[
    {
        dish:'Pizza',
        price:25
    },
    {
        dish:'burger',
        price:15
    },
    {
        dish:'Tacos',
        price:18
    }
]

restaurantApp.functions={
    showMenu:dishes=>{
        console.log(`Bienvenido a nuestro menú`);
        dishes.forEach((dish,index)=>{
            console.log(`${index}: ${dish.dish} ${dish.price}` );
        })
    },
    order: id=>{
        console.log(`Tu platillo ${restaurantApp.dishes[id].dish} se está cocinando`)
    },
    addDish:(dish,price)=>{

        const newDish={
            dish,
            price
        }
        dishes.push(newDish)
    }
}

const {dishes} = restaurantApp;
restaurantApp.functions.showMenu(dishes);
restaurantApp.functions.order(1);
restaurantApp.functions.addDish('Anticuchos',15);
restaurantApp.functions.showMenu(dishes);