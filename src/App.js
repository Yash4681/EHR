import Admin from './components/Admin';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientLogin from './components/PatientLogin'
import DoctorLogin from './components/DoctorLogin'
import AdminLogin from './components/AdminLogin'
import DoctorRegistration from './components/DoctorsRegistration/DoctorRegistration'
import PatientRegistration from './components/PatientRegistration/PatientRegister'
import bg from '../src/bg.png'
import ScheduledAppointments from './components/ScheduledAppointments/ScheduledAppointments';
import AppointmentBooking from './components/AppointmentBooking/AppointmentBooking';

function App() {
  return (
    <BrowserRouter>
          <NavBar />
          <div>
            <img src = {bg} alt = "" width="1920" height="720" display= "inline-block" style={{position: 'fixed', zIndex: -1}}/>
          </div>
          <Routes>
              <Route exact path="Admin" element={<Admin/>} />
              <Route exact path="PatientLogin" element={<PatientLogin/>} />
              <Route exact path="DoctorLogin" element={<DoctorLogin/>} />
              <Route exact path="AdminLogin" element={<AdminLogin/>} />
              <Route exact path="PatientRegistration" element={<PatientRegistration/>} />
              <Route exact path="DoctorRegistration" element={<DoctorRegistration/>} />
              <Route exact path="ScheduleAppointment" element={<AppointmentBooking />} />
              <Route exact path="Appointments" element={<ScheduledAppointments />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
