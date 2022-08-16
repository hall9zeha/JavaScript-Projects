import {travel} from '../model/Travel.js'
import { testimonials } from '../model/Testimonials.js'

const beginningPage = async (req,res) =>{

    //cargamos 3 viajes de la base de datos
    try {

        //creamos u  promise con un arreglo para poner dos funciones que se ejecuten al mismo tiempo
        //dentro de un async await
        
        const promiseDb = []

        promiseDb.push(travel.findAll({limit: 3}))
        promiseDb.push(testimonials.findAll({limit:3}))

        const result = await Promise.all(promiseDb)

        res.render('beginning',{
            page:'Inicio',
            clase:'home',
            travels: result[0],
            allTestimonials: result[1]
        })
    } catch (error) {
        console.log(error)
    }

   
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
const testimonialsPage= async (req,res)=>{

    try {

        const allTestimonials = await testimonials.findAll()

        res.render('testimonials',{
            page:'Testimoniales',
            allTestimonials
        })
    } catch (error) {
        console.log(error)
    }
   
}


export {
    beginningPage,
    usPage, contactPage, travelsPage,
    testimonialsPage,detailTravelPage
}