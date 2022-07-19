//para crear un elemento privado de usa el símbolo de numeral # 

class ClientPrivate{

    #name //privado

    setName(name){
        this.#name=name;
    }

    getName(name){
        return this.#name;
    }
}

const client= new ClientPrivate();
client.setName('Martha');
console.log(client.getName());
