import React from 'react'
import community2 from '../assets/community2.png'
import goj from "../assets/GOJ.png"

function signup() {
  return (
    <div className='bg-[#113F83]'>
    <section className='flex justify-between items-center'>
        <section className='bg-white py-20 px-10 m-10 xll:w-full smm:px-0 smm:mx-4'>
        <div>
            <h1 className='text-2xl text-center text-[#113F83]'>Sign up</h1>
            <p className='text-center mt-2'>First create an account</p>
        </div>
        
       <div className='flex flex-col'>
              <input type="text" placeholder={"Full name"} required className='w-96 mt-4 p-2 bg-transparent border-b  smm:w-80 smm:mx-6 xll:w-full'/>
              <input type="text" placeholder={"email address"} required className='w-96 mt-4  p-2 bg-transparent border-b smm:w-80 smm:mx-6  xll:w-full'/>
              <input type="Password" placeholder={"Password"} required className='w-96 mt-4 p-2 bg-transparent border-b smm:w-80 smm:mx-6  xll:w-full'/>
              <button className=' text-[#fff] bg-[#113F83] py-2 px-4 rounded font-semibold mt-4 border border-[#0026CA] w-96 smm:w-80 smm:mx-6 smm:my-3 xll:w-full'><a href="" className='cursor-pointer'>Join now</a></button>
       </div>

       <div>
          <p className='mt-5 text-center'>Already have an account <a href="" className='text-[#113F83]'>Login</a></p>
       </div>
       </section>
    </section>
    </div>
  )
}
export default signup
