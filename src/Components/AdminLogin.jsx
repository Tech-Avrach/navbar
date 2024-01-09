import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';


export const AdminLogin = () => {
    const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  let navigate=useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    if(userName==='admin' && password==='123')
    {
        navigate('/adminpage');
    }
  };

    return (
        <>
        <div className="container mt-5">
      <h2>Login Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">User Name</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            placeholder="Enter your user name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
        </>
      )
    
    }
    