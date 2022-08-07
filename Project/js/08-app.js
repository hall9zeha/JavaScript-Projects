//Mediator pattern - comunicar diferentes objetos
function Seller(name){
    this.name= name;
    this.room= null;
}

Seller.prototype = {
    sale:(article,price) =>{
        console.log(`Tenemos el siguiente artículo ${article}, iniciamos en ${price}`);
    },
    sold:buyer=>{
        console.log(`Vendido A ${buyer}`);
    }
}

function Buyer(name){
    this.name=name;
    this.room=null;
}

Buyer.prototype={
    sale:(count, buyer) => {
        console.log(`${buyer.name}: ${count}`);
    }
}

//Subasta reune a todos los objetos
function Auction(){
    let buyers = {}
    return {
        register:user =>{
            buyers[user.name] = user;
            user.room = this;
        }
    }
}

//creamos los objetos

const martha = new Buyer('Martha');
const barry = new Buyer('Barry');

const seller = new Seller('Vendedor de autos');
const auction = new Auction();

//registrando compradores y vendedor en la sala de subasta
auction.register(martha);
auction.register(barry);
auction.register(seller);

seller.sale('Tesla Z',14000);
barry.sale(5000,barry);
martha.sale(7000,martha);
seller.sold('Martha');

