//Api Intersection observer
document.addEventListener('DOMContentLoaded', ()=>{
    const observer = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting){
            console.log('Ya es visible');
        }
    });

    observer.observe(document.querySelector('.premium'));
})