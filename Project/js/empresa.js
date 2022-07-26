//Heredaremos de cliente
import { Client } from "./cliente.js";

export class Enterprise extends Client{
    constructor(client,balance,category){
        super(client,balance)
        this.category=category;
    }

    showInfoEnterprise(){
        return `name: ${this.client} - balance: ${this.balance} - category: ${this.category}`;
    }
}

