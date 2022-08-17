const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController')

module.exports = function() {
    //agregamos nuevos pacientes via POST
    router.post('/patients',
        patientController.newClient
    )
    router.get('/patients',
        patientController.getPatients
    )
    //obtener un paciente por su id

    router.get('/patients/:id',
        patientController.getPatientById
    )
    //actualizar paciente por id 
    router.put('/patients/:id',
        patientController.updatePatient
    )
    //Eliminar pacient por id
    router.delete('patients/:id',
        patientController.deletePatient
    )
    return router;
}