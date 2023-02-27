import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./PatientRegistration.css";

const PatientRegistrationForm = () => {
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/api/patient/createpatient`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({firstName, lastName, dob:dateOfBirth, gender, email, password, phoneNumber, address})
        });

        const json = await response.json();
        console.log(json);
        if(json.success){
          localStorage.setItem("token", json.token);
          navigate("/PatientLogin");
          alert("Created Account Successfully", "success");
        }else{
          alert("Invalid Details", "danger");
        }
  };

  return (
    <div className="container my-5">
    <h1 className='text-center'>Patient Registration Form</h1>
    <form onSubmit={handleSubmit} className="registration-form">
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
      </label>
      <label>
        Date of Birth:
        <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
      </label>
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">-- Please select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <label>
        Phone Number:
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default PatientRegistrationForm;
