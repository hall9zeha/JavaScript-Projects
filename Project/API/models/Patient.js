const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name:{
        type: String,
        trim: true
    },
    owner:{
        type: String,
        trim: true
    },
    date:{
        type: String,
        trim: true
    },
    time:{
        type: String,
        trim: true
    },
    signals:{
        type: String,
        trim: true
    },
    phone:{
        type: String,
        trim: true
    }


});

module.exports = mongoose.model('Patient',patientSchema)