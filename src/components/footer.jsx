import React from "react";
import threndin from "../assets/threndin.png";
import facebook from "../assets/facebook.png";
import insatgram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import topdown from "../assets/topdown.png";

function footer() {
  const top = () =>{
    window.scrollTo(0, 0)
  }
  return (
    <footer className="bg-[#080A35] mt-24">
      <h1 className="text-center text-white pt-7 text-2xl smm:text-xl">
        Don’t miss out on our latest update. Subscribe to our newsletter.
      </h1>
      <section className="flex justify-center gap-3 mt-4 ">
        <div>
          <input
            type="text"
            placeholder="email"
            className="w-80 rounded pl-2 pr-2  p-1 smm:w-60"
          />
        </div>

        <div>
          <button className="rounded pl-2 pr-2 p-1  text-white border">
            Subscribe
          </button>
        </div>
      </section>

      <section className="flex justify-between items-center mt-2 p-8 flex-wrap  smm:mt-9 ">
        <div>
          <a href="" className="block text-[#036EFF] mt-3">
            About us
          </a>
          <a href="" className="block text-[#036EFF] mt-3">
            Contact us
          </a>
          <a href="" className="block text-[#036EFF] mt-3">
            Jobs
          </a>
          <a href="" className="block text-[#036EFF] mt-3">
            Add portfolio
          </a>
        </div>

        <div>
          <img src={threndin} alt="" className="smm:hidden"/>
        </div>

        <div className=" block">
          <a href="" className="block text-[#036EFF] mt-3">
            Privacy policy
          </a>
          <a href="" className="block text-[#036EFF] mt-3">
            Security
          </a>
          <a href="" className="block text-[#036EFF] mt-3">
            Report Abuse
          </a>
          <a href="" className="block text-[#036EFF] mt-3">
            Terms and condtion
          </a>
        </div>
      </section>

      <section className="smm:mt-9">
        <a href="" className="text-[#036EFF] flex justify-center">
          Social media
        </a>
        <section className="">
          <div className="flex gap-3 justify-center mt-4">
            <img src={twitter} alt="" />
            <img src={insatgram} alt="" />
            <img src={linkedin} alt="" />
            <img src={facebook} alt="" />
          </div>
          <div className="flex justify-end px-10 py-2 smm:px-2">
            <a href="" onClick={top}><img src={topdown} alt="" className="w-10" /></a>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default footer;
