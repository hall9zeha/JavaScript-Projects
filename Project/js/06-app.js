//New binding

function Auto(model,color){
    this.model=model;
    this.color=color;
}

const auto = new Auto('pickUp','gray');
console.log(auto);

//window binding

window.color='gray';
function getColor(){
    console.log(color);
}
getColor();