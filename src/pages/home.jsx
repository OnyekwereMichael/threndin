import React, { useState } from "react";
import { frames } from "../components/mapped"
import ellispe from "../assets/Ellipse.png"
import ellispe2 from "../assets/Ellipse2.png"
import { BiMenuAltRight } from "react-icons/bi";
import goggle from "../assets/goggle.png";
import meta from "../assets/meta.png";
import amazon from "../assets/amazon.png";
import lang from "../assets/language.png";
import threndin from "../assets/threndin.png";
import framee from "../assets/framee.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function hero() {
  const [menu, setMenu] = useState("false");
      
  return (
   <section>
    <header className=" bg-[#080A35]">
    <section className="flex justify-around smm:justify-between  smm:p-5">
      <img src={amazon} alt="" className=" mt-6 w-24 smm:w-24"/>
      <section className="flex ">
      <nav className="text-blue-700 mt-6 nave smm:hidden">
        <a href="#" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
          Home
        </a>
        <a href="" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
          About us
        </a>
        <a href="#" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
          Product
        </a>
        <a href="#" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
          Jobs
        </a>
        <a href="/community" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
          Community
        </a>
        <a href="#" className="text-[#757793] hover:text-[#fff] font-semibold mr-5">
          Contact
        </a>
      </nav>
      <div>
         <img src={lang} alt="" className="mt-6 smm:hidden"/>
      </div>
     </section>
      <BiMenuAltRight
        size={50}
        onClick={() => {
          setMenu(!menu);
        }}
        className="text-white bi"
      />
    </section>

    <section className="bg-trasparent">
      <article className={`${menu ? "show-nav" : ""} bg-blue-800 transition-all `}>
        <a href="" className="text-white text-xl ml-5 LINKS">Home</a>
        <a href="" className="ml-5 text-white text-xl LINKS">About us</a>
        <a className="ml-5 text-white text-xl LINKS">Product</a>
        <a className="text-white text-xl ml-5 LINKS">Jobs</a>
        <a href="/community" className="ml-5 text-white text-xl LINKS">Community</a>
        <a className="ml-5 text-white text-xl LINKS">Contact</a>
      </article>
    </section>

    <section>
      <h1 className="text-center text-white pt-24 text-4xl tracking-tight font-kronaone smm:pt-10 smm:text-2xl">
        Lorem ipsum dolor
      </h1>
      <p className="text-center text-white mt-4 smm:text-sm smm:px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> nemo culpa dicta sed temporibus magni aut ipsa eius
      </p>
      <section className="flex  justify-center items-center">
        <button className="text-white bg-[#036EFF] py-1 px-5 mr-5 mt-8 rounded">
          Get Started
        </button>
        <button className="bg-white text-[#036EFF] py-1 px-8 mr-5 mt-8 rounded">
          Explore
        </button>
      </section>
    </section>

    <section className="flex justify-around items-center py-20">
       <img src={meta} alt="" className="w-28 smm:w-24" />
      <img src={goggle} alt="" className="w-28 smm:w-24" />
      <img src={amazon} alt="" className="w-28 smm:w-24" />
    </section>
  </header>
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
        <section className='flex justify-around items-center mt-10 smm:flex-wrap xll:flex-wrap xll: gap-5 smm:gap-10'>
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
   </section>
  )
}

export default hero
