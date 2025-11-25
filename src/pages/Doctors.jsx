import React from 'react'
import { doctors, specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Doctors = () => {
const [filter,setFilter]=useState(false)
const [bg , setBg]=useState(false)
const [bl, setBl] = useState('All')

const filteredDoctors = doctors.filter((item) => {
    if (bl === 'All' || !bl) return true
    return item.speciality === bl
})

  return (
<>
<hr className=' ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px] text-gray-300' />
<h1 className=' mt-5 mb-4  ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px] '>Browse through the doctors specialist.</h1>

<div className='flex flex-col md:flex-row   gap-10  mb-20  ml-[17px]  md:ml-[130px] mr-[17px] md:mr-[130px] '>

<div>

<p className= {`${bg? 'bg-blue-600 text-white  ' : 'bg-white'} rounded-lg py-2 px-3 border border-gray-300 w-fit md:hidden cursor-pointer`} onClick={()=>{setFilter(!filter) ; setBg(!bg)}}  >Filters</p>

<ul className= {`${filter? 'hidden' : 'block'}   md:block mt-8 w-[200px] space-y-2` }>
{['All', ...specialityData.map(s=>s.speciality)].map((type)=>(
     <li key={type} className={`  px-3 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-300 ${bl === type ? 'bg-blue-600 text-white' : 'bg-white' } `} onClick={()=>{setBl(type); setFilter(true); setBg(false)}}>
       <a  href={`#${type}`}>   
        {type}
        </a>
        </li>

 ))}

</ul>





</div>










<div className='flex flex-wrap justify-center gap-3'>
{filteredDoctors.map((item,index)=>(
    
    <Link key={index} to={`/doctors/${item._id}`} className='  flex flex-col items-center justify-center  pl-3  mt-10 mb-10 md:mb-0  md:inline-block  text-center    hover:shadow-emerald-100 hover:scale-105 transition-transform duration-300 cursor-pointer '>
      
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








</div>




</> 

)
}

export default Doctors