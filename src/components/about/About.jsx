import React from "react";

const About = () => {
  return (
    <div className="flex flex-col 3xl:w-screen h-799 items-center opacity-100 bg-gray-medium p-0">
      <h1 className="w-610 h-24 text-center font-bold font-title text-black opacity-100 tracking-normal text-7xl mt-28">Get to Know me!</h1>
      <div className="w-52 h-3 bg-red p-0 rounded-md opacity-100 mt-2.5"></div>
      <p className="w-7/12 h-44 text-center tracking-normal text-text opacity-100 text-3xl leading-9 text-pharagrap mt-24">The hardest part is getting started, the rest we will build together, I can help you connect with the world through your web app. I'm excited to work with you and bring your ideas to life</p>
      <p className="w-2/4 h-20 text-center tracking-normal text-text opacity-100 text-3xl leading-9 text-pharagrap font-bold">Let's talk about your new project over a cup of coffee.</p>
      <button className="w-40 h-20 bg-red rounded-md opacity-100 m-20">
        <span className="w-16 h-8 mt-24 text-left text-pharagrap tracking-normal text-white opacity-100 text-xl">Mi CV</span>
      </button>
    </div>
  )
}

export default About;