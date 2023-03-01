import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Homepage() {
  return (
    <>
    <nav className="navbar position-relative navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">EHR Management System</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse position-absolute end-0" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </Link>
          <ul className="dropdown-menu position-absolute end-0">
            <li><Link className="dropdown-item" to="AdminLogin">For Admin</Link></li>
            <li><Link className="dropdown-item" to="DoctorLogin">For Doctor</Link></li>
            <li><Link className="dropdown-item" to="PatientLogin">For Patient</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown ">
          <Link className="nav-link dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="DoctorRegistration">For Doctor</Link></li>
            <li><Link className="dropdown-item" to="PatientRegistration">For Patient</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Outlet />
</>
  )
}

export default Homepage