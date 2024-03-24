import React from 'react'
import { frames } from "../components/mapped"
import ellispe from "../assets/Ellipse.png"
import ellispe2 from "../assets/Ellipse2.png"
import framee from "../assets/framee.png"
// import SwiperCore, {Navigation, Pagination, Scrollbar} from "swiper";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// SwiperCore.use([Navigation, Pagination, Scrollbar])

function hero() {
  return (
   <main className=''>
     <h1 className='text-[#021C8B] text-center font-bold text-3xl mt-10'>Try Our Products</h1>

 <section className="mt-10 p-6 smm:flex smm:justify-center">
          <Swiper
            spaceBetween={1}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            breakpoints={{
              540: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
            }}
          >
            {frames.map((item, ivx) => (
              <div key={ivx}>
                <SwiperSlide>
                  <div>
                    <img src={item.img} alt="" />
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </section>

        <section className='text-white bg-[#021C8B] mt-24 flex flex-col items-center xll:mt-10 smm:mt-10'>
  <h1 className='text-center font-bold text-2xl pt-3'>Startup Mission</h1>
  <p className='text-center px-10 mt-4 smm:text-left smm:px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .</p>
  <div className="flex justify-center mt-8">
    <button className='bg-[#036EFF] text-white py-1 px-5 mb-4 rounded '><a href="" className='p-4 '>Get started</a></button>
  </div>
</section>


        <section className='justify-center items-center flex flex-col relative'>
          <img src={framee} alt="" />
        </section>

        <section>
        <h1 className='text-[#021C8B] text-center font-bold text-3xl mt-10'>Featured Blogs</h1>
        <section className='flex justify-around items-center mt-10 smm:flex-wrap xll:flex-wrap xll: gap-5'>
          <section className='border-[#0026CA] rounded w-64 mx-3 p-2  blogs smm:w-full'>
            <h2 className='text-black hover:text-[#0026CA] pointer font-bold'>Lorem ipsum dolor </h2>
            <p className='mt-4 text-black'>Lorem ipsum dolor sit amet,consecteturadipiscing elit, consecte tura dipis cing elit, sed do eiusmod </p>
            <div className='mt-4 flex items-center gap-5'>
            <button className='bg-[#036EFF] text-white py-1 px-1  rounded font-semibold'><a href="" className=' border-blue-500'>Read more</a></button>
            <a href="" className='text-[#0026CA] font-semibold'>Save for later</a>
            </div>
            </section>
          <section className='border-[#0026CA] rounded  w-64 mx-3 p-2  blogs smm:w-full'>
            <h2 className='text-black hover:text-[#0026CA] pointer font-bold'>Lorem ipsum dolor </h2>
            <p className='mt-4 text-black'>Lorem ipsum dolor sit amet,consecteturadipiscing elit, consecte tura dipis cing elit, sed do eiusmod </p>
            <div className='mt-4 flex items-center gap-5'>
            <button className='bg-[#036EFF] text-white py-1 px-1  rounded font-semibold'><a href="" className=' border-blue-500'>Read more</a></button>
            <a href="" className='text-[#0026CA] font-semibold'>Save for later</a>
            </div>
            </section>
          <section className='border-[#0026CA] rounded w-64 mx-3 p-2  blogs smm:w-full'>
            <h2 className='text-black hover:text-[#0026CA] pointer font-bold'>Lorem ipsum dolor </h2>
            <p className='mt-4 text-black'>Lorem ipsum dolor sit amet,consecteturadipiscing elit, consecte tura dipis cing elit, sed do eiusmod </p>
            <div className='mt-4 flex items-center gap-5'>
            <button className='bg-[#036EFF] text-white py-1 px-1  rounded font-semibold'><a href="" className=' border-blue-500'>Read more</a></button>
            <a href="" className='text-[#0026CA] font-semibold'>Save for later</a>
            </div>
            </section>
          <section className='border-[#0026CA] rounded w-64 mx-3 p-2  blogs smm:w-full '>
            <h2 className='text-black hover:text-[#0026CA] pointer font-bold'>Lorem ipsum dolor </h2>
            <p className='mt-4 text-black'>Lorem ipsum dolor sit amet,consecteturadipiscing elit, consecte tura dipis cing elit, sed do eiusmod </p>
            <div className='mt-4 flex items-center gap-5'>
            <button className='bg-[#036EFF] text-white py-1 px-1  rounded font-semibold'><a href="" className=' border-blue-500'>Read more</a></button>
            <a href="" className='text-[#0026CA] font-semibold'>Save for later</a>
            </div>
            </section>
            </section>
        </section>
   </main>
  )
}

export default hero
