import React from 'react'
import { FaCss3, FaJava, FaPython, FaReact, FaSwift, FaVuejs } from 'react-icons/fa';
const Techno = () => {
  return (
    <div>
      <h1 className='text-center text-4xl font-bold'>Technologies I use</h1>

<div className='grid grid-cols-4 my-7 gap-y-9 lg:grid-cols-3 sm:grid-cols-2'>

<FaVuejs className='text-center w-full' size={150} />
  <FaReact className='text-center w-full hover:text-rose-500 hover:scale-125 transition-all ' size={150} />
  <FaJava className='text-center w-full animate-spin' size={150} />
  <FaCss3 className='text-center w-full animate-bounce' size={150} />
  <FaPython className='text-center w-full' size={150} />
  <FaSwift className='text-center w-full animate-pulse' size={150} />

</div>
    </div>
  )
}

export default Techno
