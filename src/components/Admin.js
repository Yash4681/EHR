import React from 'react';
import './Admin.css';

function Admin() {
  return (
    <div className="admin">
      <div className="admin-header">
        {/* <h1>Hospital Management System</h1> */}
        <p>This is where you can manage patients, doctors and appointments.</p>
      </div>
      <div className="admin-links">
        <a href="/patients" className="admin-link">
          <div className="admin-link-icon">
            <i className="fas fa-user-injured"></i>
          </div>
          <div className="admin-link-text">
            <h2>View Patients</h2>
            <p>View a list of all patients in the system.</p>
          </div>
        </a>
        <a href="/doctors" className="admin-link">
          <div className="admin-link-icon">
            <i className="fas fa-user-md"></i>
          </div>
          <div className="admin-link-text">
            <h2>View Doctors</h2>
            <p>View a list of all doctors in the system.</p>
          </div>
        </a>
        <a href="/appointments" className="admin-link">
          <div className="admin-link-icon">
            <i className="far fa-calendar-check"></i>
          </div>
          <div className="admin-link-text">
            <h2>View Appointments</h2>
            <p>View a list of all appointments in the system.</p>
          </div>
        </a>
        <a href="PatientRegistration" className="admin-link">
          <div className="admin-link-icon">
            <i className="fas fa-user-plus"></i>
          </div>
          <div className="admin-link-text">
            <h2>Add a New Patient</h2>
            <p>Add a new patient to the system.</p>
          </div>
        </a>
        <a href="DoctorRegistration" className="admin-link">
          <div className="admin-link-icon">
            <i className="fas fa-user-md"></i>
          </div>
          <div className="admin-link-text">
            <h2>Add a New Doctor</h2>
            <p>Add a new doctor to the system.</p>
          </div>
        </a>
        <a href="/schedule-appointment" className="admin-link">
          <div className="admin-link-icon">
            <i className="far fa-calendar-plus"></i>
          </div>
          <div className="admin-link-text">
            <h2>Schedule an Appointment</h2>
            <p>Schedule a new appointment with a patient and doctor.</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Admin;
