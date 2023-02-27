const mongoose = require("mongoose");
const {Schema} = mongoose;

const PatientSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    password:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: false
    },
    address:{
        type: String,
        required: false
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Patient = mongoose.model("patient", PatientSchema)
module.exports = Patient;