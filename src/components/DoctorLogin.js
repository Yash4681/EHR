import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/api/doctor/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
          });
  
          const json = await response.json();
          console.log(json);
          if(json.success){
            localStorage.setItem("token", json.token);
            navigate("/");
            alert("Logged in Successfully", "success");
          }else{
            alert("Invalid Details", "danger");
          }
  };

  return (
    <>
    <div className='container my-4'>
        <h1>Doctors's Login</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email} onChange={(e) => setEmail(e.target.value)} required />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </>
  );
};

export default LoginPage;
