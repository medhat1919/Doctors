import React from 'react'
import { doctors } from '../assets/assets'
import { Link } from 'react-router-dom'
const Top = () => {
  return (
    <div className=' ml-[17px]  md:ml-[100px] mr-[17px] md:mr-[100px] mt-20 mb-20 '> 
<div className='flex flex-col items-center '>
    <h1 className='text-3xl font-semibold mb-4'> Top Doctors to Book

</h1>
<p className='text-gray-500 w-[450px] text-center '>Simply browse through our extensive list of trusted doctors.

</p>
</div>


<div className='flex flex-wrap justify-center gap-3'>
{doctors.slice(0,10) .map((item,index)=>(
    
    <Link key={index} to={`/doctors/${item._id}`} className='  flex flex-col items-center justify-center  pl-3  mt-10 mb-10 md:mb-0 md:mt-20 md:inline-block  text-center    hover:shadow-emerald-100 hover:scale-105 transition-transform duration-300 cursor-pointer '>
      
        <div className='w-[250px] border border-blue-100 rounded-xl  - flex flex-col items-center  '>
            
            <div className='bg-blue-50 mb-5'>
        <img src={item.image} alt="" /></div>
        <div className='flex items-center gap-2 mb-2 justify-center'>
                         <div className='  bg-green-600 rounded-full p-1 mt-1'/>
                         <p className='text-green-600'>Available</p>
                          </div>
         <h2 className='font-semibold'>{item.name}</h2>
        <p className='text-gray-500 mb-5'>{item.speciality}</p>
</div>
    </Link>
    

))}


</div>

<Link to="/doctors" className='flex justify-center w-full mt-6' >
    <button className=' bg-blue-500 text-white px-8 py-3.5 rounded-full mt-5 hover:scale-105 transition-transform duration-300 cursor-pointer' onClick={window.scrollTo(0,0)}> View All Doctors </button>
</Link>


    </div>
  )
}

export default Top