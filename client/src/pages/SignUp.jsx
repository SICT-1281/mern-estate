import React from 'react'
import {Link} from'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-teal-400 text-3xl text-center font-semibold my-7 font-mono'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
            <input type="text" placeholder="username" 
            className='bg-neutral-600 focus:outline-noneborder p-3 rounded-lg font-mono' id='username'/>
            <input type="email" placeholder="email" 
            className='bg-neutral-600 focus:outline-noneborder p-3 rounded-lg font-mono' id='email'/>
            <input type="password" placeholder="password" 
            className='bg-neutral-600 focus:outline-noneborder p-3 rounded-lg font-mono' id='password'/>
            <button className='bg-pink-400 font-mono p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>
              Sign Up
            </button>
      </form>

      <div className="flex gap-2 mt-3">
        <p className='text-neutral-50 font-mono'> Have an account? </p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700 font-mono'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
