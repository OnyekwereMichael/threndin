import React from 'react'
import { frames } from "../components/mapped"
import ellispe from "../assets/Ellipse.png"
import ellispe2 from "../assets/Ellipse2.png"
import framee from "../assets/framee.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function hero() {
  return (
   <main className=''>
     <h1 className='text-[#021C8B] text-center font-bold text-3xl mt-10'>Try Our Products</h1>

 <section className="mt-10 p-6 smm:p-2">
          <Swiper
            spaceBetween={1}
            slidesPerView={1}
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

        <section className='text-white bg-[#021C8B] mt-28 flex flex-col items-center xll:mt-10 smm:mt-10'>
  <h1 className='text-center font-bold text-2xl pt-3'>Startup Mission</h1>
  <p className='text-center px-10 mt-4 smm:text-left smm:px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .</p>
  <div className="flex justify-center mt-8">
    <button className='bg-[#036EFF] text-white py-1 px-5 mb-4 rounded '><a href="" className='p-4 '>Get started</a></button>
  </div>
</section>


        <section className='mt-32 justify-center items-center flex flex-col relative'>
          <img src={framee} alt="" />
          <button className='bg-[#036EFF] flex justify-center text-white py-1 px-5 mr-5 mt-8 rounded absolute'>Join our Community</button>
        </section>
   </main>
  )
}

export default hero
