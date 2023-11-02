import React from 'react'
import { useSelector } from 'react-redux'
export default function Profile() {
  const {currentUser}=useSelector((state)=> state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-pink-400 text-3xl font-semibold text-center my-7 font-mono'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.avatar} alt="profile"
        className='rounded-full h-24 w-24 object-cover cursor-pointer self-center' />
        <input type="text" placeholder='username' id='username'
        className='focus:outline-noneborder p-3 rounded-lg bg-neutral-600 font-mono' />
        <input type="text" placeholder='email' id='email'
        className='focus:outline-noneborder p-3 rounded-lg bg-neutral-600 font-mono' />
        <input type="text" placeholder='password' id='password'
        className='focus:outline-noneborder p-3 rounded-lg bg-neutral-600 font-mono' />
        <button className='bg-teal-400 rounded-lg font-mono p-3 uppercase hover:opacity-95 disabled: opacity-80'>update</button>
      </form>
      <div className="flex justify-between mt-3">
        <span className='text-pink-400 cursor-pointer'>Delete Account</span>
        <span className='text-pink-400 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
