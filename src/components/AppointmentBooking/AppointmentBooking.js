import React, { useEffect, useState } from 'react';
import './AppointmentBooking.css'; // Import CSS file for styling

function AppointmentBooking() {
  const [name, setName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctors, setDoctors] = useState([]);

  const getDoctor = async () => {
    //API call
    const response = await fetch(`http://localhost:5000/api/doctor/getalldoctor`, {
      method: 'GET',
  
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json(); 

    setDoctors(json);
  }

  useEffect(() => {
    getDoctor();
  }, [])
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/api/appointment/createappointment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, doctor, date, time})
      });

      const json = await response.json();
      console.log(json.success);
      if(json.success){
        alert("Appointment Booked Successfully", "success");
      }else{
        alert("Error", "danger");
      }
  };

  return (
    <div className="appointment-booking-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="aform">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="doctor">Doctor:</label>
        <select id="doctor" value={doctor} onChange={(e) => setDoctor(e.target.value)}>
        <option value="">Select a doctor</option>
        {
            doctors.map((item) => {
                const name = item.firstName.concat(" ").concat(item.lastName);
                return(
                    <option value={name}>{name}</option>
                )
            })
        }
        </select>

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />

        <button href="/appointments" type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default AppointmentBooking;