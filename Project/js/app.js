/**
 * Variables y selectores
 */
const form = document.querySelector('#agregar-gasto');
const expenseList = document.querySelector('#gastos ul');


/**
 * Eventos
 * 
 */

eventListeners()
function eventListeners(){
    document.addEventListener('DOMContentLoaded',answerExpense);
    form.addEventListener('submit', addCost);
}


/**
 * Clases
 */
class Expense{

    constructor(expense){
        this.expense=Number(expense);
        this.remaining=Number(expense);
        this.costs=[];
    }
    newcost(cost){
        this.costs=[...this.costs,cost];
        this.calculateRemaining();
    }
    calculateRemaining(){
        const cost=this.costs.reduce((total, cost) => total + cost.amount, 0);
        this.remaining = this.expense - cost;
    }
    deleteCost(id){
        this.costs=this.costs.filter(cost=> cost.id !== id);
        this.calculateRemaining();
    }
}

class UI{
    insertExpense(amount){
        const {expense, remaining} = amount;
        document.querySelector('#total').textContent=expense;
        document.querySelector('#restante').textContent=remaining;
    }
    updateRemaining(remaining){
        document.querySelector('#restante').textContent=remaining;
    }
    printAlert(message, type){
        const divMessage=document.createElement('div');
        divMessage.classList.add('text-center','alert');
        if(type==='error'){
            divMessage.classList.add('alert-danger');
        }
        else{
            divMessage.classList.add('alert-success');
        }

        divMessage.textContent=message;
        document.querySelector('.primario').insertBefore(divMessage,form);
        setTimeout(() => {
            divMessage.remove();
        }, 2000);
    }
    addListCost(costs){
        ui.clearHtml();
        costs.forEach(cost =>{
            const {amount, name, id} = cost;

            const newCost=document.createElement('li');
            newCost.className= 'list-group-item d-flex justify-content-between align-items-center';
            newCost.dataset.id=id;

            newCost.innerHTML  = `${name} <span class="badge badge-primary badge-pill">${amount}</span>
            
            `;
            const btnDelete=document.createElement('button');
            btnDelete.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnDelete.innerHTML='Borrar &times';
            btnDelete.onclick=()=>{
                deleteCost(id);
            }
            newCost.appendChild(btnDelete);
            
            expenseList.appendChild(newCost);



        })
    }
    clearHtml(){
        while(expenseList.firstChild){
            expenseList.removeChild(expenseList.firstChild);
        }
    }
    checkExpense(expenseObj){
        const {expense, remaining}=expenseObj;
        const remainingDiv=document.querySelector('.restante');

        if((expense / 4) > remaining){
            remainingDiv.classList.remove('alert-success', 'alert-warning');
            remainingDiv.classList.add('alert-danger');

        }
        else if((expense / 2) > remaining){
            remainingDiv.classList.remove('alert-success');
            remainingDiv.classList.add('alert-warning');
        }
        else{
            remainingDiv.classList.remove('alert-danger', 'alert-warning');
            remainingDiv.classList.add('alert-success');
        }
        if(remaining<=0){
            ui.printAlert('El presupuesto se ha agotado', 'error');
            form.querySelector('button[type="submit"]').disabled=true;
        }
    }
}
const ui = new UI();
let expense;
/**
 * Funciones
 */

function answerExpense(){
    const userExpense = prompt("¿Cuál es tu presupuesto");
    

    //puede validarse si el parámetro ingresado es un número o no con isNaN(userExpense) que devuelve true si es número
    if(userExpense ===''|| userExpense === null || !parseInt(userExpense) || userExpense <=0){
        window.location.reload()
    }
    expense=new Expense(userExpense);
    ui.insertExpense(expense);


}
function addCost(e){
    
    e.preventDefault();
   
    const name=document.querySelector('#gasto').value;
    const amount =Number(document.querySelector('#cantidad').value);

    if(name ==='' || amount ===''){
        ui.printAlert('Ambos campos son obligatorios','error');
        return;
    }
    else if(amount<=0 || isNaN(amount)){
        ui.printAlert('Cantidad no válida', 'error');
        return;
    }
    const cost={name, amount, id:Date.now()};
    expense.newcost(cost);

    ui.printAlert('Agregado correctamente');
    const {costs,remaining}=expense;
    ui.addListCost(costs);
    ui.updateRemaining(remaining);
    ui.checkExpense(expense);
    form.reset();


}
function deleteCost(id){
    expense.deleteCost(id);
    const{costs,remaining}=expense;
    ui.addListCost(costs);
    ui.updateRemaining(remaining);
    ui.checkExpense(expense);
}