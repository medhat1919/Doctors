import React from 'react'
import {assets} from '../assets/assets.js'
import { Link } from 'react-router-dom';

const Book = () => {
  return (
<div className=' md:h-[310px]  bg-indigo-500 ml-[17px] mt-10 md:ml-[130px] mr-[17px] md:mr-[130px] rounded-xl text-white flex flex-col md:flex-row items-center justify-center  '  >

<div className='md:ml-[100px]  md:w-[650px]'>
    <div>
<h1 className='text-4xl ml-5 mt-7 md:mt-0 md:ml-0 md:text-5xl font-semibold md:font-bold mb-3  '>Book Appointment

  </h1>
  <p className='text-4xl ml-5 mt-7 md:mt-0 md:ml-0 md:text-5xl font-semibold md:font-bold mb-5  '>With 100+ Trusted Doctors

</p>
  </div>
<Link to='/login' onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
    <button className='ml-5 mb-7 md:ml-0 flex items-center gap-2 bg-white  text-black px-6 py-4 rounded-full mt-5 hover:scale-105 transition-transform duration-300 cursor-pointer'> Create Account </button>
    </Link>
</div>

<div className='md:block hidden'> 
    <img className='h-[324px] mb-3' src={assets.appointment_img} alt="" />
</div>







</div>
 )
}

export default Book