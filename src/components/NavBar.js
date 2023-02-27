import React from 'react'

function Homepage() {
  return (
    <nav className="navbar position-relative navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">EHR Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse position-absolute end-0" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu position-absolute end-0">
            <li><a className="dropdown-item" href="/AdminLogin">For Admin</a></li>
            <li><a className="dropdown-item" href="/DoctorLogin">For Doctor</a></li>
            <li><a className="dropdown-item" href="/PatientLogin">For Patient</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Register
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/DoctorRegistration">For Doctor</a></li>
            <li><a className="dropdown-item" href="/PatientRegistration">For Patient</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>~
</nav>
  )
}

export default Homepage