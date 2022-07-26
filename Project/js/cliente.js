//Importante se debe agregar una propiedad (type='module')en el index, script y donde se llama al archivo.js  
export const client='Martha'; //exportamos esta variable para que esté accesible en otros módulos, puede ser clase función objeto etc;
export const balance=1800;

export function showBalance(client,balance){
    return `Client ${client}  Balance ${balance}`;
}

export function haveBalance(balance){
    if(balance>0){
        console.log("si tiene saldo");
    }
    else{
        console.log("no tiene saldo");
    }
}

//spormaos una clase

export class Client {
    constructor(client, balance){
        this.client=client;
        this.balance=balance;

    }
    showInfoClientOfClass(){
        return `name client: ${this.client} - balance: ${this.balance}`;
    }
}
//Export default, no se puede tener dos export default, deben ir fuera de las llaves de importación
//y se le puede poner un alias en el lugar de importación.

export default function functionExportDefault(){
    console.log("Esta es un Export default");
}