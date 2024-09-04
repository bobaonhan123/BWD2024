import { Link } from 'react-router-dom'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'sonner'
import { register } from '../api/userAPI'

import logo from '../assets/images/google_logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function RegisterComponent({ onLoginClick, option }) {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFullnameChange = (e) => {
    setFullname(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleRegister = async () => {
    try {
      const response = await register(fullname, email, password, true)
      console.log(response)
      if (!response.email) {
        throw new Error('Register failed. Please check your email or password.', {
          position: "top-right",
          autoClose: 2000,
          style: {
            color: "green",
            fontWeight: "bold",
            textAlign: "center",
          },
        })
      }
      toast.success('Register successfully!')
      onLoginClick()
    }
    catch (error) {
      toast.error('Register failed. Please check your email',
        {
          position: "top-right",
          autoClose: 2000,
          style: {
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
          },
        }
      )
      console.log(error)
    }
  }

  return (
    <div
      className={`absolute 
          top-0 w-1/2 
          h-full rounded-3xl 
          bg-white z-0 transition-transform duration-500 ease-in-out
          flex flex-col
          justify-center
          ${!option ? 'max-lg:hidden' : 'max-lg:w-full'}`}
    >
      <Link to="/"><h1 className='mb-2 text-3xl font-semibold
                    bg-gradient-to-b from-[#4FACFE] from-21%
                    to-[#00F2FE] bg-clip-text text-transparent' >
        take it easy
      </h1>
      </Link>
      <p className='text-[#6C7580] text-lg mx-20 mb-10
      max-md:text-base'>
        The better way to learn and practice
        new words!
      </p>
      <input className="
      mx-14 h-12 rounded-full bg-[#f6f7fb]
      flex items-center justify-center px-10
      placeholder-[#6C7580]
      max-md:mx-4 mb-4"
        placeholder='Your full name' value={fullname}
        onChange={handleFullnameChange} />

      <input className="
      mx-14 h-12 rounded-full bg-[#f6f7fb]
      flex items-center justify-center px-10
      placeholder-[#6C7580]
      max-md:mx-4 mb-4"
        placeholder='Your email' value={email}
        onChange={handleEmailChange} />

      <input className="
      mx-14 h-12 rounded-full bg-[#f6f7fb]
      flex items-center justify-center px-10
      placeholder-[#6C7580]
      max-md:mx-4"
        type='password'
        placeholder='Your password' value={password}
        onChange={handlePasswordChange} />

      <button className='mx-14 h-12 
                    bg-gradient-to-r from-[#00F2FE] from-21%
                    to-[#4FACFE]
                    px-10 my-6
                    flex items-center rounded-full justify-center
                    text-white
      max-md:mx-4'
        onClick={handleRegister} >
        <p className='text-lg pr-2
      max-md:mx-4 max-md:text-base'
        >
          Register
        </p>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <p className='text-[#6C7580] text-sm mx-4'>
        Have an Account already? <span className='font-semibold
                    bg-gradient-to-r from-[#00F2FE] from-21%
                    to-[#4FACFE] bg-clip-text 
                    text-transparent
                    cursor-pointer'
          onClick={onLoginClick}>Login</span>
      </p>
    </div>
  )
}