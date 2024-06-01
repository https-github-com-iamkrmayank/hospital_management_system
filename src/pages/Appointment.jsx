import { Calendar } from '@/Components/ui/calendar'
import React, { useState } from 'react'

const Appointment = () => {
  const [open,setOpen] = useState(false);
  return (
    <div className='pt-20 flex flex-col justify-center items-center'>
      <button className='bg-black rounded-lg w-16 h-7 text-white m-4 font-bold' onClick={()=>{
        setOpen(!open)
      }}>Book</button>
      {open?<Calendar className='bg-teal-500/40 rounded-xl mb-5 mt-2'/>:null}
    </div>
  )
}

export default Appointment
