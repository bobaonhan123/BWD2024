import { Link } from 'react-router-dom'

import logo from '../assets/images/google_logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function RegisterComponent({onLoginClick, option}) {
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

      <button className="
      mx-14 h-12 rounded-full bg-[#f6f7fb]
      flex items-center justify-center
      max-md:mx-4">
        <img src={logo} alt="google logo" className="w-6 h-6 mr-4" />
        <p className="text-[#4B5563]">Sign up with google</p>
      </button>

      <div className='my-6'>
        <div className='mx-auto w-10 bg-white relative z-20'>
          <p className='font-light text-[#6C7580]'>OR</p>
        </div>
        <hr className='mx-20 bg-[#D9D9D9] border-[#D9D9D9]
        relative top-[-12px] z-10' />
      </div>
      <input className="
      mx-14 h-12 rounded-full bg-[#f6f7fb]
      flex items-center justify-center px-10
      placeholder-[#6C7580]
      max-md:mx-4"
        placeholder='Your email' />

      <button className='mx-14 h-12 
                    bg-gradient-to-r from-[#00F2FE] from-21%
                    to-[#4FACFE]
                    px-10 my-6
                    flex items-center rounded-full justify-center
                    text-white
      max-md:mx-4' >
        <p className='text-lg pr-2
      max-md:mx-4 max-md:text-base' >
          Send Magic Link
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