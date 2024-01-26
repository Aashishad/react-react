import React from 'react'

const Header =()=> {
  return (
    <div className='flex justify-between bg-black text-white px-[20px] py-3 items-baseline sticky z-50'>
      <h1 className='text-2xl'>Demo</h1>
      <nav className='space-x-3'>
      <button class=" hidden sm:flex cursor-pointer ml-auto relative w-12 h-12 p-4">
      <svg class="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
     
    </button>
        <button>About</button>
        <button>Contact</button>
      </nav>
      
    </div>
  )
}

export default Header
