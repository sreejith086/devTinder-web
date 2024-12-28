import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


const Login = () => {
    const [emailId, setEmailID] = useState('sree@gmail.com');
    const [password ,setPassword] = useState('Sreejith@1234');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin =async()=>{
        try {
           const res = await axios.post(
            BASE_URL+"/login",
            { 
              emailId, password
            },{withCredentials:true});
            dispatch(addUser(res.data));
            navigate("/");
        } catch(err){
            console.error(err.message)
        }
        
    }
  return (
    <div className='flex justify-center my-10 '>
        <div className="card bg-base-300 w-96 shadow-xl">
    <div className="card-body">
      <h2 className="card-title justify-center">Login</h2>
     <div> 
     <label className="form-control w-full max-w-xs my-2">
        <div className="label">
            <span className="label-text">Email ID</span>
        </div>
        <input type="text" value={emailId} onChange={(e)=>setEmailID(e.target.value)} className="input input-bordered w-full max-w-xs" />
     </label> 
     <label className="form-control w-full max-w-xs my-2">
        <div className="label">
            <span className="label-text">Password</span>
        </div>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="input input-bordered w-full max-w-xs" />
     </label> 
     </div>
      <div className="card-actions justify-center m-2">
        <button onClick={handleLogin} className="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login