import React from 'react'
import community2 from '../assets/community2.png'

function signup() {
  return (
    <div className='bg-[#113F83]'>
    <section className='flex justify-between items-center relative'>
        <img src={community2} alt="" className='smm:hidden'/>
        <section className='bg-white p-10 m-10 smm:p-0 smm:mx-4'>
        <div>
            <h1 className='text-2xl text-center text-[#113F83]'>Sign up</h1>
            <p className='text-center'>First create an account</p>
        </div>
        
       <div className=''>
              <input type="text" placeholder={"Full name"} required className='w-96 mt-4 p-2 bg-transparent border-b  smm:w-80'/>
              <input type="text" placeholder={"email address"} required className='w-96 mt-4  p-2 bg-transparent border-b smm:w-80'/>
              <input type="Password" placeholder={"Password"} required className='w-96 mt-4 p-2 bg-transparent border-b smm:w-80'/>
              <button className=' text-[#fff] bg-[#113F83] py-1 px-4 rounded font-semibold mt-4 border border-[#0026CA] w-96 smm:w-80'><a href="" className='cursor-pointer'>Join now</a></button>
       </div>
       </section>
    </section>
    </div>
  )
}

export default signup
