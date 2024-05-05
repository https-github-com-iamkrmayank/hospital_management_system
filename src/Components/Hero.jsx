/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Hero = ({heroUrl}) => {
  return (
    <div className='w-full h-4/6 flex flex-col lg:flex-row justify-center gap-5 items-center pt-28 pb-10 px-5'>
      <div className='w-full lg:w-1/3 lg:mt-10'>
        <h1 className='text-2xl lg:text-5xl text-zinc-900 font-extrabold pb-5'>Lorem  consectetur adipisicing elit. Consequuntur, voluptas.</h1>
        <p className='text-md lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias earum deleniti eius in quaerat optio ex quos, et odit adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex eum tenetur molestiae adipisci quisquam sapiente deserunt nisi ipsam quis vel, harum ab laudantium sequi?</p>
      </div>
      <div>
        <span className='absolute top-[-100px] right-[-300]'>
            {/* <img src="/Vector.png" alt="vector" /> */}
        </span>
        <img className='z-10 h-80 w-48 lg:h-[500px] lg:w-[300px]' src={heroUrl} alt="animated-image"/>
      </div>
    </div>
  )
}

export default Hero
