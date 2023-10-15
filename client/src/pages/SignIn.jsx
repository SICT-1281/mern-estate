import React from 'react'
import {Link,useNavigate} from'react-router-dom'
import{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'

export default function SignIn() {
  const [formData,setFormData]=useState({})
  const {loading,error}=useSelector((state)=>state.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleChange=(e)=>{
      setFormData({
        ...formData,
        [e.target.id]:e.target.value
      });
  };

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      dispatch(signInStart());

    const res= await fetch('/api/auth/signin', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    if(data.success===false){
      dispatch(signInFailure(data.message));
      return;
    }
    dispatch(signInSuccess(data.message));
    navigate('/')
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
    
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-teal-400 text-3xl text-center font-semibold my-7 font-mono'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type="email" placeholder="email" 
            className='bg-neutral-600 focus:outline-noneborder p-3 rounded-lg font-mono' id='email' onChange={handleChange}/>
            <input type="password" placeholder="password" 
            className='bg-neutral-600 focus:outline-noneborder p-3 rounded-lg font-mono' id='password' onChange={handleChange}/>
            <button disabled={loading} className='bg-pink-400 font-mono p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>
              {loading ? 'Loading...': 'Sign IN'}
            </button>
      </form>

      <div className="flex gap-2 mt-3">
        <p className='text-neutral-50 font-mono'> Dont have an account? </p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700 font-mono'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-teal-400 mt-5 font-mono'>{error}</p>}
    </div>
  )
}