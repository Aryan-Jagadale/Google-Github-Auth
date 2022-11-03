import React from 'react'
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa";
const Login = () => {
  return (
    <div className='w-full h-full flex items-center justify-center p-4'>
        <div className='w-full sm:w-96 border-gray-200 bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center gap-4'>
            <div className='cursor-pointer w-full px-6 py-3 bg-white rounded-md gap-3 flex items-center justify-center hover:shadow-md'>
                <FcGoogle className="text-4xl"/>
                <p className='text-lg font-semibold text-gray-600'>Sign in with Google</p>
            </div>

            <div className='cursor-pointer w-full px-6 py-3 bg-white rounded-md gap-3 flex items-center justify-center hover:shadow-md'>
                <FaGithub className="text-4xl"/>
                <p className='text-lg font-semibold text-gray-600'>Sign in with Github</p>
            </div>

        </div>
    </div>
  )
}

export default Login