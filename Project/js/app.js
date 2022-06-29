const cart = document.querySelector('#carrito');
const cartContent=document.querySelector('#lista-carrito tbody');
const trashCartBtn=document.querySelector('#vaciar-carrito');
const coursesList=document.querySelector('#lista-cursos');
let articlesCart=[];


initEventListeners();
function initEventListeners(){
    coursesList.addEventListener('click', addCourse);
    //eliminar curso del carrito
    cart.addEventListener('click', deleteCourse);
    //Vaciar el carrito de compras
    trashCartBtn.addEventListener('click', ()=>{
        articlesCart=[];
        addCourseSelectedToHtml();
    })
}
function addCourse(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const selectedCourse=e.target.parentElement.parentElement
        dataOfCourse(selectedCourse);
    }
}
function deleteCourse(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const idCourse=e.target.getAttribute('data-id');//traemos el id del elemento al presionar en la x de eliminar
        //volvemos a traer los elementos del arreglo excepto el que queremos eliminar por su id
        articlesCart = articlesCart.filter(course => course.id!==idCourse)
        addCourseSelectedToHtml()//y volvemos a cargar el arreglo en el html
    }
}

function dataOfCourse(course){
    //creamos el objeto con la descripción del curso seleccionado
    const courseInfo={
        image: course.querySelector('img').src,
        title:course.querySelector('h4').textContent,
        price: course.querySelector('.precio span').textContent,
        id: course.querySelector('a').getAttribute('data-id'),
        amount: 1
    }
    //revisamos si un elemento ya existe en el carrito

    const exists=articlesCart.some(course => course.id===courseInfo.id)

    if(exists){
         const updatedCourse=articlesCart.map(course =>{
             if(course.id===courseInfo.id){
                 course.amount++;
                 return course;
             }
             else{
                 return course;
             }
         })   
         articlesCart=[...updatedCourse];
         }
    else{
            //agregamos los cursos al arreglo del carrito de compras, hacemos una copia del original con
                //spread operator
                articlesCart=[...articlesCart, courseInfo];
         }
    

    console.log(articlesCart);
    addCourseSelectedToHtml()
}

//función para agregar los elementos seleccionados en html al carrito de compras

function addCourseSelectedToHtml(){
    cleanHtml();
    articlesCart.forEach(course =>{
        //Usando destructurig para las propiedades del objeto course
        const{image,title,price,amount,id} = course

        const row=document.createElement('tr');
        row.innerHTML=`
            <td>
                <img src="${image}" width="100">
            </td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${amount}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>

        `;
        //agregamos el elemento seleccionado en cada iteración
        cartContent.appendChild(row)

    })
    
}
//limpiar el html
function cleanHtml(){
    //forma lenta
    //cartContent.innerHTML='';

    //una forma más eficiente
    while(cartContent.firstChild){
        cartContent.removeChild(cartContent.firstChild);
    }
}