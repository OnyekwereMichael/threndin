import React, { useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import { groups } from "../components/mapped"
import threndin from "../assets/threndin.png";
import comm from "../assets/community.png";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function community() {
  const [menu, Setmenu] = useState("false")
  return (
   <main className=''>
    <section className='flex justify-between px-7 items-center'>
       <img src={threndin} alt="" className='text-black'/>
       <div>
         <Link className='ml-6 bg-[#036EFF] text-white py-2 px-3 rounded smm:hidden'>Sign up</Link>
         <Link className='ml-6 border border-[#036EFF]  py-2 px-3 rounded smm:hidden'>Log in</Link>
       </div>

       <BiMenuAltRight
        size={50}
        onClick={() => {
          Setmenu(!menu);
        }}
        className="text-black bi "
      />
    </section>

    <section className="bg-trasparent">
      <article className={`${menu ? "show-nav" : ""} bg-blue-800`}>
      <Link className=' bg-[#036EFF] text-white py-2 px-3 rounded'>Sign up</Link>
        <Link className=' border border-[#036EFF]  py-2 px-3 rounded'>Log in</Link>
      </article>
    </section>

    <section>
       <img src={comm} alt="" />
    </section>


    <h1 className=' text-[#021C8B] text-center font-bold text-3xl mt-10'>Find Community Group</h1>
    <section className="mt-10 p-6 smm:flex smm:justify-center">
  <Swiper
    spaceBetween={1}
    slidesPerView={1}
    breakpoints={{
      540: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 1,
      },
      1000: {
        slidesPerView: 3,
      },
    }}
  >
    {groups.map((item, ivx) => (
      <div key={ivx} className=""> {/* Added margin to space out items */}
        <SwiperSlide>    
          <div className='bg-[#4860CB] rounded w-96 blogs p-4 smm:w-full xll:w-96 lgg:w-full'>
            <img src={item.img} alt=""className='mr-4' />
            <h1 className='mt-4 font-bold mr-4'>{item.Group}</h1>
            <p className='mt-4 mr-4'>{item.Preveiw}</p>
            <button className='bg-[#036EFF] py-1 px-4 rounded font-semibold mt-4 border border-[#0026CA]'>{item.join}</button>
          </div>
        </SwiperSlide>
      </div>
    ))}
  </Swiper>
</section>


  <h1 className=' text-[#021C8B] text-center font-bold text-3xl mt-10 smm:text-2xl'>Community Learning resources</h1>
  <section className='flex justify-between items-center mt-10 p-8 smm:flex-wrap smm:p-2 smm:mt-2  xll:p-2'>
    <section className='border-[#0026CA] rounded w-80 mx-3 p-2  blogs bg-[#B7D3F9] smm:w-full smm:mt-6'>
        <img src={threndin} alt="" className='w-20'/>
        <h1 className=' font-bold text-xl'>Product Designer's Group</h1>
        <p className='mt-4'>Lorem ipsum dolor sit amet,consecteturadipiscing elit, consecte tura dipis cing elit, sed do eiusmod Lorem ipsum dolor sit it, sed do eiusmod .</p>
        <button className=' text-[#0026CA] py-1 px-4  rounded font-semibold mt-4 border border-[#0026CA] '><a href="" className='cursor-pointer'>Join now</a></button>
    </section>
    <section className='border-[#0026CA] rounded w-80 mx-3 p-2  blogs bg-[#B7D3F9] smm:w-full smm:mt-6'>
        <img src={threndin} alt="" className='w-20'/> 
        <h1 className='font-bold text-xl'>Content creator's Group</h1>
        <p className='mt-4'>Lorem ipsum dolor sit amet,consecteturadipiscing elit, consecte tura dipis cing elit, sed do eiusmod Lorem ipsum dolor sit it, sed do eiusmod .</p>
        <button className=' text-[#0026CA] py-1 px-4  rounded font-semibold mt-4 border border-[#0026CA] '><a href="" className='cursor-pointer'>Join now</a></button>
    </section>
    <section className='border-[#0026CA] rounded w-80 mx-3 p-2  blogs bg-[#B7D3F9] smm:w-full smm:mt-6'>
        <img src={threndin} alt="" className='w-20'/>
        <h1 className=' font-bold text-xl'>Developers Group</h1>
        <p className='mt-4'>Lorem ipsum dolor sit amet,consecteturadipiscing elit, consecte tura dipis cing elit, sed do eiusmod Lorem ipsum dolor sit it, sed do eiusmod .</p>
        <button className=' text-[#0026CA] py-1 px-4  rounded font-semibold mt-4 border border-[#0026CA] '><a href="" className='cursor-pointer'>Join now</a></button>
    </section>
    </section>

    <section className='flex justify-between items-center mt-10 p-8 smm:flex-wrap smm:p-2 smm:mt-0 xll:p-2'>
    <section className='border-[#0026CA] rounded w-80 mx-3 p-2 bg-[#B7D3F9]  blogs smm:w-full smm:mt-6 '>
         <img src={threndin} alt="" className='w-20'  />
        <h1 className='font-bold text-xl'>Product Designer's Group</h1>
        <p className='mt-4'>Lorem ipsum dolor sit amet,consecteturadipiscing elit, consecte tura dipis cing elit, sed do eiusmod Lorem ipsum dolor sit it, sed do eiusmod .</p>
        <button className=' text-[#0026CA] py-1 px-4  rounded font-semibold mt-4 border border-[#0026CA] '><a href="" className='cursor-pointer'>Join now</a></button>
    </section>
    <section className='border-[#0026CA] rounded w-80 mx-3 p-2  blogs bg-[#B7D3F9] smm:w-full smm:mt-6'>
         <img src={threndin} alt="" className='w-20'/>
        <h1 className=' font-bold text-xl'>Content creator's Group</h1>
        <p className='mt-4'>Lorem ipsum dolor sit amet,consecteturadipiscing elit, consecte tura dipis cing elit, sed do eiusmod Lorem ipsum dolor sit it, sed do eiusmod .</p>
        <button className=' text-[#0026CA] py-1 px-4  rounded font-semibold mt-4  border border-[#0026CA] '><a href="" className=' cursor-pointer'>Join now</a></button>
    </section>
    <section className='border-[#0026CA] rounded w-80 mx-3 p-2  blogs bg-[#B7D3F9] smm:w-full smm:mt-6'>
         <img src={threndin} alt="" className='w-20'/>
        <h1 className=' font-bold text-xl'>Developers Group</h1>
        <p className='mt-4'>Lorem ipsum dolor sit amet,consecteturadipiscing elit, consecte tura dipis cing elit, sed do eiusmod Lorem ipsum dolor sit it, sed do eiusmod .</p>
        <button className=' text-[#0026CA] py-1 px-4  rounded font-semibold mt-4 border border-[#0026CA] '><a href="" className=' cursor-pointer'>Join now</a></button>
    </section>
    </section>
   </main>
  )
}

export default community
