import React from 'react'

const Introduction = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-4xl font-bold'>Who am I</h1>

      <div className='h-[390px] w-[390px] mt-7 border-4 border-red-600 bg-black rounded-full text-white flex  flex-col items-center justify-center'>

        <div>
          <h1>Name : Lorem Ipsum</h1>
          <h1>Email: Loremipsum@gmail.com</h1>
          <h1>Tel: 9814528695</h1>
          <h1>Age: 20</h1>
          <h1>Experience:python, java, dart</h1>

        </div>


      </div>
    </div>
  )
}

export default Introduction
