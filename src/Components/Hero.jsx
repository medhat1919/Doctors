import React from 'react'
import {assets} from '../assets/assets.js'

const Hero = () => {
  return (

<>
<hr className=' ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px] text-gray-300' />
<div className=' md:h-[480px]  bg-indigo-500 ml-[17px] mt-10 md:ml-[130px] mr-[17px] md:mr-[130px] rounded-xl text-white flex flex-col md:flex-row items-center justify-center  '   >
<div className='md:ml-[100px]  md:w-[600px]'>
<h1 className='text-4xl ml-5 mt-7 md:mt-0 md:ml-0 md:text-5xl font-semibold md:font-bold mb-5  '>Book Appointment
With Trusted Doctors</h1>

<div className='flex flex-col md:flex-row items-center gap-3'>
    <img src={assets.group_profiles} alt="" />
    <p className='ml-5 md:ml-0'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>

</div>
 <div className='ml-30 md:ml-0'>
    <button className='flex items-center gap-2 bg-white  text-black px-6 py-4 rounded-full mt-5 hover:scale-105 transition-transform duration-300 cursor-pointer'> Book appointment <img src={assets.arrow_icon} alt="" /> </button>
</div>
</div>


<div className='mr-10'>

    <img className='h-[400px] mt-5 md:mt-[80px]' src={assets.header_img} alt="" />
</div>
</div>



</>

   )
}

export default Hero