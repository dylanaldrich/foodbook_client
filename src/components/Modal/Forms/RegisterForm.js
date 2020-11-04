/* imports */
import React, {useState} from 'react';

import AuthModel from '../../../models/AuthModel';


/* Register Form Component */
export const RegisterForm = ({closeModal}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    AuthModel.register({username, email, password}).then((response) => {
      if(response.status === 201) {
        closeModal();
      } else {
        setError(response.message);
      }
    });
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>} 
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input 
          className="form-control" 
          id="username"
          name='username' 
          onChange={(e) => setUsername(e.target.value)}
          value={username} 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name='email'
          placeholder="name@example.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;