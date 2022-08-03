//Composition
const getName = info =>({
    showName(){
        console.log(`Nombre: ${info.name}`);
    }
})

const setEmail = info =>({
    saveEmail(email){
        console.log('Gruadando email');
        info.email= email;
    }
})

const getEmail = info =>({
    showEmail() {
        console.log(`El email es: ${info.email}`)
    }
})

function Client(name,email,company){
    let info={
        name,
        email,
        company
    }

    //Definimos funciones y las pasamos al objeto
    return Object.assign(
        info,
        getName(info),
        setEmail(info),
        getEmail(info)
    );

}


function Employee(name,email,company){
    let info={
        name,
        email,
        company
    }
    return Object.assign(
        info,
        getName(info),
        setEmail(info),
        getEmail(info)
    );
}

const client= Client('Martha',null, 'multivac');
client.showName();
client.saveEmail('martha@mail.com')
client.showEmail()
const employee=Employee('Barry',null,'developer');
employee.showName()
employee.saveEmail('barry@mail.com')
employee.showEmail()