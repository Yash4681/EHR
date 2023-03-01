import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './doctorRegistration.css';

const DoctorRegistrationForm = () => {
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/doctor/createdoctor`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({firstName, lastName, email, password, dob:dateOfBirth, gender, speciality, address, contact})
        });

        const json = await response.json();
        console.log(json);
        if(json.success){
          localStorage.setItem("token", json.token);
          navigate("/DoctorLogin");
          alert("Created Account Successfully", "success");
        }else{
          alert("Invalid Details", "danger");
        }
  };

  return (
    <div className="container my-5">
      <h1>Doctor Registration Form</h1>
    <div className="doctor-registration-form">
      <form onSubmit={handleSubmit} className="dform">
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
          Speciality:
          <input
            type="text"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Contact:
          <input
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default DoctorRegistrationForm;
