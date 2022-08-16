import { testimonials } from "../model/Testimonials.js"

const saveTestimonials = async (req,res)=>{
    //validar formulario
    const{name,email,message} =req.body

    //consultamos los testimoniales
   

    const errors=[]

    if(name.trim()===''){
        errors.push({msg:'El nombre está vacío'})
    }
    if(email.trim()===''){
        errors.push({msg:'El correo está vacío'})
    }
    if(message.trim()===''){
        errors.push({msg:'el mensaje está vacío'})
    }
    
    //si hay errore en el arreglo
    if(errors.length>0){
        const allTestimonials = await testimonials.findAll()

        res.render('testimonials',{
            page:'Testimoniales',
            errors,
            name,
            email,
            message,
            allTestimonials
        }   )
    }
    else{
        //Guardar en la base de datos
        try {
            await testimonials.create({
                nombre:name,
                correo:email,
                mensaje:message
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }
    }

}

export {
    saveTestimonials
}