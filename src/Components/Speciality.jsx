import React from 'react'
 import { specialityData } from '../assets/assets'
 import { Link } from 'react-router-dom'
const Speciality = () => {
  return (
    <div className=' ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px] mt-20 mb-20 '> 
<div className='flex flex-col items-center '>
    <h1 className='text-3xl font-semibold mb-4'>Find by Speciality
</h1>
<p className='text-gray-500 w-[450px] text-center '>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
</div>


<div className='flex flex-wrap justify-center '>
{specialityData.map((item,index)=>(
    
    <Link key={index} to={`/doctors#${item.speciality}`} onClick={()=>window.scrollTo(0,0)} className='flex flex-col items-center justify-center gap-4  mt-10 mb-10 md:mb-0 md:mt-20 md:inline-block  text-center md:mx-[40px]  hover:shadow-emerald-100 hover:scale-105 transition-transform duration-300 cursor-pointer '>
        <img src={item.image} alt="" />
        <h2>{item.speciality}</h2>

    </Link>
    

))}


</div>



    </div>
  )
}

export default Speciality