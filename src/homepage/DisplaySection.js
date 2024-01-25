import React from 'react'

const DisplaySection = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-1 items-center px-[2%]'>
      <div>
      <dotlottie-player src="https://lottie.host/fdcd7df3-0c72-43f0-8346-12bebd56c714/JwyRbDNvNA.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
      </div>
      <div className=''>
        <h1 className='text-4xl font-bold'>Hi, I am John </h1>
        <h2 className='py-2 text-rose-500'>Some Dev, Freelancer, Rounder</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>
      </div>
    </div>
  )
}

export default DisplaySection
