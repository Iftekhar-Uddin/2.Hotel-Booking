import React, {useContext, useState} from 'react'
import "./login.scss"
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import api_key from '../../api';


const Login = () => {
    const [credentials, setCredentials] = useState({username: undefined, password: undefined});
    const {loading, error, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const api = api_key();

    const handleChange = (e) => {
      setCredentials((prev) => ({...prev, [e.target.id] : e.target.value}));
    };

    const handleClick = async (e) => {
      e.preventDefault();
      dispatch({type: "LOGIN_START"});
      try {
        const res = await axios.post(`${api}/auth/login`, credentials);
        if(res.data.isAdmin){
          dispatch({type: "LOGIN_SUCCESS", payload: res.data.details});
          navigate("/")
        }else{
          dispatch({
            type: "LOGIN_FAILURE",
            payload: {message: "You are not allowed!"},
          });
        }
        } catch (error) {
        dispatch({type: "LOGIN_FAILURE", payload: error.response.data})
      }
    };


  return (
    <div className='login'>
      <h1 className='adminpanel'>Admin Panel</h1>
      <div className='lContainer'>
        <div className='loginnnbox'>
        <label className="labeling" >Username</label>
        <input className='lInput' type="text" placeholder='username' id="username" onChange={handleChange}/>
        <label className="labeling">Password</label>
        <input className='lInput' type="password" placeholder='password' id="password" onChange={handleChange}/>
        <button className='lButton' disabled={loading} onClick={handleClick}>Login</button>
        {error && <div className='errormsg'><span>{error.message}</span></div>}
        </div>
      </div>
    </div>
  )
}

export default Login;