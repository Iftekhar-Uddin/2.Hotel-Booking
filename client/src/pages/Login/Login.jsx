import React, {useContext, useState} from 'react'
import "./login.css"
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api_key from '../../api'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const api = api_key();
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
    const [credentials, setCredentials] = useState({username: undefined, password: undefined});
    const {loading, error, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
      setCredentials((prev) => ({...prev, [e.target.id] : e.target.value}));
    };

    const handleClick = async (e) => {
      e.preventDefault();
      dispatch({type: "LOGIN_START"});
      try {
        const res = await axios.post(`${api}/auth/login`, credentials);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data.details});
        navigate("/")
        } catch (error) {
        dispatch({type: "LOGIN_FAILURE", payload: error.response.data})
      }
    }


  return (
    <div className='login'>
      <div className='loginWrapper'>

        <div className="logintop">
          <h3 className="loginLogo">Booking App</h3>
          <span className="loginDesc">Get your best hotel</span>
        </div>

        <div className='loginbottom'>
          <div className='loginBox'>
          <label className="labelName">User Name</label>
          <input className='lInput' type="text" placeholder='username' id="username" onChange={handleChange}/>
          <label className="labelName">Password</label>
          <input className='lInput' type={ showPassword ? "text" : "password"} placeholder='password' id="password" onChange={handleChange}/>
          <span className="showPass" onClick={handleShowPassword}> {showPassword ? "Hide" : "Show"} </span>
          <button className='lButton' disabled={loading} onClick={handleClick}>Login</button>
          </div>
          {error && <span>{error.message}</span>}
        </div>

      </div>
    </div>
  )
}

export default Login;
