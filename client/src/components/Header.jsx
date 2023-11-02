import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function Header() {
    const {currentUser}=useSelector(state=>state.user)
  return (
    <header className='bg-neutral-800 shadow-sm shadow-neutral-600'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-1'>
            <Link to='/'>

        <h1 className='font-bold text-sm sm:text-3xl flex flex-wrap'>
            <span className='text-pink-400'>ST</span>
            <span className='text-teal-400'>Estate</span>
        </h1>
        </Link>
        <form className='bg-neutral-600 p-1 rounded-lg flex items-center font-mono'>
            <input type="text" placeholder="Search..." 
            className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-neutral-400' />
        </form>

        <ul className='flex gap-4'>
            <Link to='/'>
            <li className=' text-teal-400 hover:underline font-mono'>Home</li>
            </Link>
            <Link to='/about'>
            <li className=' text-teal-400 hover:underline font-mono'>About</li>
            </Link>
            <Link to='/profile'>
            {currentUser ? (<img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />):
            (
            <li className=' text-teal-400 hover:underline font-mono'>Sign in</li> 
            )
            }
            </Link>
              
        </ul>

        </div> 
    </header>
  )
}
