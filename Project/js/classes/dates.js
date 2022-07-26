//Clases 
class Dates{
    constructor(){
        this.arrayDates=[];
    }
    addNewDate(dates){
        this.arrayDates=[...this.arrayDates, dates];
    }
    deleteDate(id){
        this.arrayDates=this.arrayDates.filter(date => date.id !==id);

    }
    editDate(dateObj){
        console.log(dateObj);
        this.arrayDates = this.arrayDates.map(date => date.id === dateObj.id ? dateObj : date);
    }
}

export default Dates;