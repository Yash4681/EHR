const mongoose = require("mongoose");
const {Schema} = mongoose;

const AppointmentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    doctor:{
        type: String,
        required: true
    },
    date:{
        type: String,
        default: Date.now
    },
    time:{
        type: String,
        required: true
    }
})

const Appointment = mongoose.model("appointment", AppointmentSchema)
module.exports = Appointment;