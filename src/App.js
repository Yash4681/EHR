import Admin from './components/Admin';
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientLogin from './components/PatientLogin'
import DoctorLogin from './components/DoctorLogin'
import AdminLogin from './components/AdminLogin'
import DoctorRegistration from './components/DoctorsRegistration/DoctorRegistration'
import PatientRegistration from './components/PatientRegistration/PatientRegister'
import bg from '../src/bg.png'

function App() {
  return (<>
          <NavBar />
          <div>
            <img src = {bg} alt = "" width="1920" height="720" display= "inline-block" style={{position: 'fixed', zIndex: -1}}/>
          </div>
          <BrowserRouter>
      <Routes>
          <Route path="Admin" element={<Admin/>} />
          <Route path="PatientLogin" element={<PatientLogin/>} />
          <Route path="DoctorLogin" element={<DoctorLogin/>} />
          <Route path="AdminLogin" element={<AdminLogin/>} />
          <Route path="PatientRegistration" element={<PatientRegistration/>} />
          <Route path="DoctorRegistration" element={<DoctorRegistration/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
