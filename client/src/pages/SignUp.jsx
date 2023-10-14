import React from 'react'
import {Link,useNavigate} from'react-router-dom'
import{useState} from 'react'

export default function SignUp() {
  const [formData,setFormData]=useState({})

  const [error, setError] =useState(null);
  const [loading, setLoading]=useState(false);
  const navigate=useNavigate();

  const handleChange=(e)=>{
      setFormData({
        ...formData,
        [e.target.id]:e.target.value
      });
  };

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      setLoading(true);

    const res= await fetch('/api/auth/signup', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    if(data.success===false){
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    setError(null);
    navigate('/sign-in')
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
    
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-teal-400 text-3xl text-center font-semibold my-7 font-mono'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <input type="text" placeholder="username" 
            className='bg-neutral-600 focus:outline-noneborder p-3 rounded-lg font-mono' id='username' onChange={handleChange} />
            <input type="email" placeholder="email" 
            className='bg-neutral-600 focus:outline-noneborder p-3 rounded-lg font-mono' id='email' onChange={handleChange}/>
            <input type="password" placeholder="password" 
            className='bg-neutral-600 focus:outline-noneborder p-3 rounded-lg font-mono' id='password' onChange={handleChange}/>
            <button disabled={loading} className='bg-pink-400 font-mono p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>
              {loading ? 'Loading...': 'Sign up'}
            </button>
      </form>

      <div className="flex gap-2 mt-3">
        <p className='text-neutral-50 font-mono'> Have an account? </p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700 font-mono'>Sign in</span>
        </Link>
      </div>
      {error && <p ClassName='text-teal-400 mt-5'>{error}</p>}
    </div>
  )
}
