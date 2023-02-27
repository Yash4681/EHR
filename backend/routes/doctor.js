const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser");


//ROUTE 1: create a doctor using post"/api/doctor/createdoctor" - no login required
const JWT_CODE = "helloalliam$ehr";
router.post("/createdoctor",[

    //Authentication
    body('email', "enter a valid email").isEmail(),
    body('password', "password must be atleast 5 character").isLength({ min: 5 }),
] , async (req,res) => {

  let success = false;

    //if there are errors return bad req
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    
    // res.send(req.body);
    //check wether the doctor with this email already exist
    try {
    let doctor = await Doctor.findOne({email : req.body.email});
    if(doctor){
        return res.status(400).json({success, error: "please enter valid credentials"})
    }    

    //hashing & salting
    const salt = await bcrypt.genSalt(10);
    const secCode = await bcrypt.hash(req.body.password, salt);
    
    // creating doctor
    user = await Doctor.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: secCode,
        dob:req.body.dob,
        gender:req.body.gender,
        speciality:req.body.speciality,
        address:req.body.address,
        contact:req.body.contact,
      })

      //response data
      const data = {
        user: {
            id: user.id
        }
      }
      //jwt sign
    const token = jwt.sign(data, JWT_CODE);

    success = true;
      res.json({success, token});

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal error occured");
    }
})

//ROUTE 2: Authenticate a doctor using post"/api/doctor/login" - no login required
router.post("/login",[

  //Authentication
  body('email', "enter a valid email").isEmail(),
  body('password', "password cannot be blank").exists(),

] , async (req,res) => {

  let success = false;
  //if there are errors return bad req
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //destructuring body
  const {email, password} = req.body;
  try {

    //checking if user with this email exist
    const user = await Doctor.findOne({email});
    if(!user){
      return res.status(400).json({success, error: "please enter valid credentials"})
    }
    
    //authenticating password
    const comparepassword = await bcrypt.compare(password, user.password);
    if(!comparepassword){
      return res.status(400).json({success, error: "please enter valid credentials"})
    }   

    const data = {
      user: {
          id: user.id
      }
    }
    success = true;
    const token = jwt.sign(data, JWT_CODE);
      res.json({success, token});

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
}

});

//ROUTE 3: Get logged in doctor details using post"/api/doctor/getdoctor" - Login required
router.post("/getdoctor", fetchuser ,async (req,res) => {

  try {
    const userID = req.user.id;
    const user = await Doctor.findById(userID).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});

//ROUTE 4: Get all doctor details using post"/api/doctor/getalldoctor" - Login required
router.get("/getalldoctor", async (req,res) => {

  try {
    const user = await Doctor.find().select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal error occured");
  }
});

module.exports = router;