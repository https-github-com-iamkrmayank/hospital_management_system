/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Hero = ({heroUrl}) => {
  return (
    <div className='w-full h-4/6 flex flex-col lg:flex-row justify-center gap-5 items-center pt-24 lg:pt-32 pb-10 px-5'>
      <div className='w-full lg:w-1/3 lg:mt-10'>
        <h1 className='text-2xl lg:text-5xl text-zinc-900 font-extrabold pb-5'>The best doctor appointment dashboard.</h1>
        <p className='text-md lg:text-lg'>FitnessCheck is the best online platform available for booking doctors appointment. Simply register, select a doctor and book your slot. All listed doctors are specialists and have years of experience.</p>
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
