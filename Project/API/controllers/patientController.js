//Importamos el modelo
const Patient = require('../models/Patient');


//Cuando se crea el nuevo cliente
exports.newClient = async (req,res,next) =>{
    //Insertar en la base de datos
    
    //creamos un objeto con los datos del paciente obtenidos en req.body

    const patient = new Patient(req.body);

    try {
        await patient.save();
        res.json({message:'Cliente registrad correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }

  

}

exports.getPatients = async (req, res,next) =>{
    try {
        const patients = await Patient.find({});
        res.json(patients)
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getPatientById = async(req,res,next) =>{
    try {
        //este id en params viene definido del modo como lo pusimos en 
        //routes index.js
        const patient = await Patient.findById(req.params.id)
        res.json(patient);

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.updatePatient = async(req,res,next) =>{
    try {
        const patient = await Patient.findOneAndUpdate({_id: req.params.id}, req.body,{
            new:true
        });
        res.json(patient);
    } catch (error) {
        console.log(error);
        next();

    }
}
exports.deletePatient = async(req,res,next) =>{
    try {
        
        await Patient.findByIdAndDelete({_id : req.params.id});
        res.json({message: 'El registro fue eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
}

