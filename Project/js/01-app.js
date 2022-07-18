const nowDay= new Date();
let value;
value=nowDay;
//lo clásico diferentes valores a travś de los métodos de Date()

value=nowDay.getFullYear();
value=nowDay.getMonth();
value=nowDay.getHours();
value=nowDay.getMinutes();
value=nowDay.getTime();//El tiempo en milisegundos

//y para modificarlos con set
value= nowDay.setFullYear(2025);

console.log(nowDay);