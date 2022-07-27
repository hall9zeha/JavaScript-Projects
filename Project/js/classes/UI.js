import { formNewClient,clientList, inputName, inputEmail, inputPhone, inputCompany} from '../selectors.js';
import {updateClient} from '../datasource/DB.js';

class UI {
    
    constructor(){
        
    }
    printAlert(message, type){
        
        const divMessage = document.createElement('div');
        const alert = document.querySelector('.alert');

        if(!alert){
            divMessage.classList.add('px-4','py-3', 'rounded','mx-w-lg','mx-auto','mt-6','text-center','border','alert');
        if(type==='error'){
            divMessage.classList.add('bg-red-100','border-red-400','text-red-700');

        }
        else{
            divMessage.classList.add('bg-green-100','border-green-400','text-green-700');
        }
      
        }
        divMessage.textContent=message;
        formNewClient.appendChild(divMessage);
        setTimeout(() => {
            divMessage.remove()
        }, 3000);
        
    }

    fillClients(client){
        const {name, email,phone,company,id} = client;
        clientList.innerHTML +=`
        <tr>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${phone}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                <p class="text-gray-600">${company}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
            </td>
        </tr>
    `;

    }
    fillClientDetail(client){
        const {name,email,phone,company} = client;
        inputName.value=name;
        inputEmail.value=email;
        inputPhone.value=phone;
        inputCompany.value=company;

    }
    updateClient(e, idClient){
        e.preventDefault();
        if(inputName.value ==='' || inputEmail.value === '' || inputPhone.value === '' || inputCompany.value === ''){
            this.printAlert('Todos los campos on obligatorios','error');
            return;
        }
        const clientUpdated ={
            name: inputName.value,
            email: inputEmail.value,
            phone:inputPhone.value,
            company:inputCompany.value,
            id:Number(idClient)
        }
        updateClient(clientUpdated);
    }
}


export default UI;