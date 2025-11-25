import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
  <>
<hr className=' ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px] text-gray-300' />

   <div className=' mt-15 '>
<h1 className='text-2xl font-semibold  text-center'> <span className='text-gray-400 uppercase'>ABOUt</span>  US </h1>

<div className='flex flex-col md:flex-row  gap-10 mt-10 mb-20  ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px] '>
<div className='md:w-[370px]'>
    <img src={assets.about_image} alt="" />
</div>

<div className=' md:w-[600px] flex flex-col flex-wrap '>
    <p className='text-gray-400 mb-5'>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.

    </p>
<p className='text-gray-400 mb-5'>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.

</p>

<h2 className='font-bold uppercase mb-3'>our vision</h2>
<p className='text-gray-400 mb-5'>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.

</p>


</div>


</div>



<div className=' mt-10 mb-20  ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px]'>
    <h1 className='text-xl'>why <span className='font-semibold'>choose us</span> </h1>


<div className='flex flex-col md:flex-row    mt-7 border border-gray-300  '>
    <div className='border border-gray-300 hover:bg-blue-600 cursor-pointer hover:text-white transition-colors duration-300 '>
        <h1 className='px-10 pt-10 pb-5 font-bold'>EFFICIENCY:</h1>
        <p className='px-10 pb-10'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
    </div>
    <div className='border     border-gray-300  hover:bg-blue-600 cursor-pointer hover:text-white transition-colors duration-300 '>
        <h1 className='px-10 pt-10 pb-5 font-bold'>CONVENIENCE::</h1>
        <p className='px-10 pb-10'>Access to a network of trusted healthcare professionals in your area.</p>
    </div>
    <div className='border   border-gray-300  hover:bg-blue-600 cursor-pointer hover:text-white transition-colors duration-300  '>
        <h1 className='px-10 pt-10 pb-5 font-bold'>PERSONALIZATION:</h1>
        <p className=' px-10 pb-10'> Tailored recommendations and reminders to help you stay on top of your health.</p>
    </div>
</div>







</div>





</div>





  </>
  )
}

export default About