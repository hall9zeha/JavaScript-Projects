//Factory pattern  // patrón de creación
class InputHtml{
    constructor(type,name){
        this.type=type;
        this.name=name;
    }

    createInput(){
        return `<input type="${this.type}" name="${this.name}" id="${this.name}"`;
    }
}

class HtmlFactory{
    createElement(type,name){
        switch(type){
            case 'text':
                return new InputHtml('text',name)
            case 'tel':
                return new InputHtml('tel',name)
            case 'email':
                return new InputHtml('email',name)
            default:
                return;
        }
    }
}

const element = new HtmlFactory();
const inputText=element.createElement('text', 'client-name');
console.log(inputText.createInput());


const element1 = new HtmlFactory();
const inputText1=element1.createElement('tel', 'client-phone');
console.log(inputText1.createInput());


const element2 = new HtmlFactory();
const inputText2=element2.createElement('email', 'client-email');
console.log(inputText2.createInput());