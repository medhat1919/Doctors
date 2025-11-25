import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <>
<hr className=' ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px] text-gray-300' />
    <div className=' mt-15 '>
<h1 className='text-2xl font-semibold text-center'> <span className='text-gray-400 uppercase'>contact</span>  US </h1>


<div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-10 mb-20  ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px] '>
    <div className='w-[370px]'>
        <img src={assets.contact_image} alt="" />
    </div>

<div>
<h1 className='mb-7 text-xl font-semibold uppercase'>OUR OFFICE

</h1>
<div className='text-gray-400'>
    <p>00000 Willms Station
</p>
<p>Suite 000, Washington, USA

</p>
</div >

<div className='text-gray-400 mt-4'>
<p>Phone: (000) 000-0000</p>
<p>Suite 000, Washington, USA

</p>

</div>

<h2 className='uppercase text-black font-semibold text-xl mt-5'>CAREERS AT PRESCRIPTO

</h2>

<p className='text-gray-400 mt-5 mb-5'>Learn more about our teams and job openings.

</p>

<button className='bg-black text-white font-bold hover:bg-white border hover:text-black px-5 py-3 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer'>Explore Jobs</button>




</div>

</div>



    </div>
    </>
  )
}

export default Contact