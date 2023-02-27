import React from 'react'
import AdminLogin from './components/AdminLogin';
import DoctorLogin from './components/DoctorLogin';
import DoctorRegistrationForm from './components/DoctorsRegistration/DoctorRegistration';
import PatientLogin from './components/PatientLogin';
import PatientRegistrationForm from './components/PatientRegistration/PatientRegister';

function App() {
  return (
    <div>
        <PatientLogin />
        <DoctorLogin />
        <AdminLogin />
        <PatientRegistrationForm />
        <DoctorRegistrationForm />
    </div>
  );
}

export default App;
