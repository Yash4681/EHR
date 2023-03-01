import React, { useEffect, useState } from 'react';
import './ScheduledAppointments.css'; // Import CSS file for styling

function ScheduledAppointments() {
  const [appointments, setAppointments] = useState([]);

  const getAppointment = async () => {
    //API call
    const response = await fetch(`http://localhost:5000/api/appointment/getallappointment`, {
      method: 'GET',
  
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token")
      },
    });
    const json = await response.json(); 

    setAppointments(json);
    console.log(json);
  }

  useEffect(() => {
        //API call
        getAppointment();
  }, [])
  

  return (
    <div className="scheduled-appointments-container">
      <h2>Scheduled Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments scheduled.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.name}</td>
                <td>{appointment.doctor}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ScheduledAppointments;