import React from 'react'
 import { doctors } from '../assets/assets'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'


const Details = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState(null);

    useEffect(() => {
        const detail = doctors.find((doctor) => doctor._id == id);
      detail &&  setDetail(detail);
    }, [id]);

  return detail && (

    <>
    <hr className=' ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px] text-gray-300' />

    <div className=' bg-red ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px] mt-10 mb-20 '> 
<div className='flex flex-col md:flex-row gap-10  '>

  <div className='bg-blue-600 rounded-2xl' >
       <img className='md:w-[350px]' src={detail.image} alt="" />
</div>

<div className=' md:mt-0 mt-[-100px] bg-white ml-4 md:ml-0 md:w-[700px] w-[420px] md:mb-0 mb-10 border border-gray-200 rounded-2xl  pl-5 pt-7 pb-4 flex flex-col gap-4 '>
  <div className='flex items-center gap-3 mb-2 '>
    <h1 className='text-3xl font-semibold  '>{detail.name} </h1>
     <img src={assets.verified_icon} alt="" /> </div>
    <div className=' uppercase flex  gap-2 '>
      <p>{detail.degree} -</p>
    <p className=''>{detail.speciality} </p>
    <div className=' mb-4 text-[10px] py-1 px-4 border  border-gray-200 rounded-2xl'>
    <p className='font-semibold' >{detail.experience}</p></div>
    </div>
     
<div className=' w-[700px] '>
<h1>About</h1>
<p className='text-gray-400'>{detail.about}</p>

<p className='mt-7'>  <span className='text-gray-600'>Appointment Fees:</span> ${detail.fees}</p>


</div>


</div>

 


</div> 
 
 <Link to={'/login'} className=' flex justify-center mt-10 mr-[100px] '>
<button class="group px-8 py-2.5 bg-indigo-600 rounded-lg text-white cursor-pointer active:scale-95 transition duration-300 hover:bg-indigo-700">
    <p class="relative h-6 overflow-hidden">
        <span class="block transition-transform duration-300 group-hover:-translate-y-full">Book An Appointment</span>
        <span class="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-100%]">Book An Appointment</span>
    </p>
</button>
</Link>



     </div>
     </>
  )
}

export default Details