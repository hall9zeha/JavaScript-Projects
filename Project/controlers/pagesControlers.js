import {travel} from '../model/Travel.js'

const beginningPage = (req,res) =>{
    res.render('beginning',{
        page:'Inicio'
    })
}
const usPage=(req,res)=>{
 
    res.render('us',{
        page: 'Nosotros'
    })
}

const contactPage=(req,res)=>{
    res.render('contact',{
        page: 'Contactos'
    })
}

const travelsPage= async (req,res)=>{

    const travels = await travel.findAll();
    console.log(travels)


    res.render('travels',{
        page:'Próximos Viajes',
        travels
    })
}
const detailTravelPage= async (req,res)=>{
   const {slug} =req.params;
   try {
        const result = await travel.findOne({where:{slug}});
        res.render('travel',{
            page:'Información de viaje',
            result
        })
   } catch (error) {
    
   }

}
const testimonialsPage=(req,res)=>{
    res.render('testimonials',{
        page:'Testimoniales'
    })
}

export {
    beginningPage,
    usPage, contactPage, travelsPage,
    testimonialsPage,detailTravelPage
}