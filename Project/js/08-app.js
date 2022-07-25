//Nuevos iteradores

const cities =['Arequipa','Paris','Tokyo','Los Angeles'];
const orders = new Set([123,564,852,12]);
const data = new Map();

data.set('name','Martha');
data.set('profession','graphic designer');

//usando entries iterator

for(let entry of cities.entries()){
    console.log(entry);
}
for(let entry of orders.entries()){
    console.log(entry);
}
for(let entry of data.entries()){
    console.log(entry);
}
//usando values iterator, solo imprime valores no claves
for(let value of cities.values()){
    console.log(value);
}
for(let value of orders.values()){
    console.log(value);
}
for(let value of data.values()){
    console.log(value);
}

//usando keys iterator solo imprime las claves o los índices

for(let key of cities.keys()){
    console.log(key);
}
for(let key of orders.keys()){
    console.log(key);
}
for(let key of data.keys()){
    console.log(key);
}

//Iteradores por defecto

for (let citie of cities){
    console.log(citie);
}
for (let order of orders){
    console.log(order);
}
for (let value of data){
    console.log(value);
}
