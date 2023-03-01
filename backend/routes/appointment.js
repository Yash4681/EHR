const express = require("express");
const Appointment = require("../models/Appointment");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");


//ROUTE 1: create a appointment using post"/api/appointment/createappointment" - no login required
router.post("/createappointment", async (req,res) => {

  let success = false;

  try{

    // creating appointment
    user = await Appointment.create({
        name: req.body.name,
        doctor: req.body.doctor,
        date: req.body.date,
        time: req.body.time,
      })

      //response data
      const data = {
        user: {
            id: user.id
        }
      }
      
    success = true;
      res.json({success});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal error occured");
    }
})


//ROUTE 2: Get logged in patient appointments using post"/api/appointment/getappointment" - Login required
router.post("/getappointment", fetchuser ,async (req,res) => {

  try {
    const userID = req.user.id;
    const user = await Appointment.findById(userID).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});

//ROUTE 3: Get all appointment using post"/api/appointment/getallappointment" - Login required
router.get("/getallappointment", async (req,res) => {

  try {
    const user = await Appointment.find().select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});

module.exports = router;