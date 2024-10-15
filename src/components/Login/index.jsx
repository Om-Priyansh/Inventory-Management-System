import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempted', { username, password, rememberMe });
    navigate("/dashboard");
  };

    return(
        <>
        <div className="container">
        <div className= "login-body">
        <form onSubmit = {handleLogin}>
        <h1>Login</h1>

        <div className="input-box">
        
          <input
          id = "username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text" 
          placeholder="username"
           required />
          {/* <!-- <i className="bx bxs-user"></i> --> */}
        </div>
        <div className="input-box">
          <input
          id="password"
          
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" placeholder="password" required />
          {/* <!-- <i className="bx bxs-lock-alt"></i> --> */}
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox"
                          id="remember-me"
                          
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
          /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="btn">Login</button>

        <div className="register-link">
          <p>Don't have an account? <a href="#">Register here!</a></p>
        </div>
      </form>
        </div>

        </div>
        </>
    )
}

export default Login;