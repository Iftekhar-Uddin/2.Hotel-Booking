import React, { useContext, useState } from 'react'
import './register.css'
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import api_key from '../../api'

const Register = () => {
  const api = api_key();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  const {loading, error, dispatch} = useContext(AuthContext);
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({username: undefined, email: undefined, phone: undefined, city: undefined, country: undefined, password: undefined});

  const handleChange = (e) => {
    setNewUser((prev)=> ({...prev, [e.target.id] : e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "REGISTER_START"});
    try {
      const res = await axios.post(`${api}/auth/register`, newUser);
      dispatch({type: "REGISTER_SUCCESS", payload: res.data.details});
      navigate("/login")
      } catch (error) {
      dispatch({type: "REGISTER_FAILURE", payload: error.response.data})
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
            <h3 className="registerLogo">Hotel Booking</h3>
            <span className="registerDesc">A Modern Hotel Booking!</span>
        </div>
        <div className="registerRight">
          <form className='registerBox' onSubmit={handleSubmit}>
            <label className="labelName">UserName</label>
            <input className='registerInput' type="text" placeholder="UserName" id="username" required onChange={handleChange}/>
            <label className="labelName">Email</label>
            <input className='registerInput' type="email" placeholder="Email" id="email" required onChange={handleChange}/>
            <label className="labelName">Phone</label>
            <input className='registerInput' type="text" placeholder="Phone" id="phone" required onChange={handleChange}/>
            <label className="labelName">City Name</label>
            <input className='registerInput' type="text" placeholder="City"  id="city" required onChange={handleChange}/>
            <label className="labelName">Country Name</label>
            <input className='registerInput' type="text" placeholder="Country"  id="country" required onChange={handleChange}/>
            <label className="labelName">Password</label>
            <input className='registerInput' type={ showPassword ? "text" : "password"} placeholder="Password" id="password"  minLength='6' required onChange={handleChange}/>
            <span className="showPass1" onClick={handleShowPassword}> {showPassword ? "Hide" : "Show"} </span>
            <label className="labelName">Repeat Password</label>
            <input className='registerInput' type={ showPassword ? "text" : "password"} placeholder=" Repeat Password" id="password" minLength='6' required onChange={handleChange}/>
            <span className="showPass1" onClick={handleShowPassword}> {showPassword ? "Hide" : "Show"} </span>
            <button className="registerButton" type="submit" disabled={loading}>Sign Up</button>
            <button className="loginRegister">
            <Link className='registerlink' to='/login'>Already have an account? Sign In</Link>
          </button>
          </form>
        </div>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}

export default Register
