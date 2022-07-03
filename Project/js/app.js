//variables
const btnSend= document.querySelector('#enviar');
const btnReset=document.querySelector('#resetBtn');
const form=document.querySelector('#enviar-mail');

const email=document.querySelector('#email');
const issue=document.querySelector('#asunto');
const message=document.querySelector('#mensaje');

const re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;  

eventListeners();
function eventListeners(){
document.addEventListener('DOMContentLoaded', initApp);
email.addEventListener('blur',validateForm);//Evento que detacta si nos salimos del campo de texto
issue.addEventListener('blur',validateForm);
message.addEventListener('blur',validateForm);
form.addEventListener('submit',sendEmail);
btnReset.addEventListener('click',resetForm);
}

//funciones
function initApp(){
    btnSend.disabled=true;
    btnSend.classList.add('cursor-not-allowed','opacity-50')
}

function sendEmail(e){
    e.preventDefault();
    //mostramos el progressbar o espinner en javascript
    const spinner = document.querySelector('#spinner');
    spinner.style.display='flex';
    //usamos un timer para ocultar el spinner de progreso en determinado tiempo
    setTimeout(()=>{
        spinner.style.display='none';
        const sendSuccess=document.createElement('p');
        sendSuccess.textContent='El mensaje se envió correctamente';
        sendSuccess.classList.add('text-center','my-10','bg-green-500', 'p-2', 'text-white','font-bold', 'uppercase');
        form.insertBefore(sendSuccess,spinner);

        setTimeout(()=>{
            sendSuccess.remove();
            resetForm();
        },5000)
    },3000)

    
}

function validateForm(e){
  
    if(e.target.value.length > 0){
        //Eliminar errores del dom
        const error = document.querySelector('p.error');
        if(error){
        error.remove();
    
    }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }
    else{
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');//coloreamos los bordes del campo de texto i no hay nada
        showError('Todos los campos son obligatorios');
    }

   
    if(e.target.type==='email'){
       
        if(re.test(e.target.value)){
            const error = document.querySelector('p.error');
            if(error){
                error.remove();}
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        }
        else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            showError('El correo no es válido');
        }
    }

    if(re.test(email.value) && issue.value !=='' && message.value !==''){
        
        btnSend.disabled=false
        btnSend.classList.remove('cursor-not-allowed','opacity-50')
    }
   
}

function showError(message){
    const errorMessage=document.createElement('p');
    errorMessage.textContent=message;
    errorMessage.classList.add('border','border-red-500','background-red-100','p-3', 'mt-5', 'text-center', 'error')
   
    const errors=document.querySelectorAll('.error');
    if(errors.length===0){//Verificamos si ya existen elementos de error en el formulario para no duplicarlos
        form.appendChild(errorMessage);//agregamos el elemento de error al final del formuario
    }
}
function resetForm(e){
    
    form.reset();
    initApp();
   
    
}