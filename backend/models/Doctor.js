const mongoose = require("mongoose");
const {Schema} = mongoose;

const DoctorSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
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
    dob:{
        type: Date,
        required: true
    },
    gender:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        required: true
    },
    address:{
        type: String,
        required: false
    },
    contact:{
        type: Number,
        required: false
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Doctor = mongoose.model("doctor", DoctorSchema)
module.exports = Doctor;