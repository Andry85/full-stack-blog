import React, { useState } from 'react';
import Images from './Images';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
      {/* Logo */}
      <div className='flex items-center gap-4 text-2xl font-bold'>
        <Images src= 'https://ik.imagekit.io/o31ofkqc7/logo.png' alt='lama logo' w={32} h={32} />
        <span>lamalog</span>
      </div>
      {/* Mobile menu */}
      <div className='md:hidden'>
        <div className='cursor-pointer text-4xl' onClick={()=> setOpen(prev=>!prev)}>
          {open ? "x": "☰"}
        </div>
        {/* MobileLink List */}
        <div className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 transition-all ease-in-out ${open ? "-right-0" :"-right-[100%]"}`}>
          <a href='/'>Home</a>
          <a href='/'>Trending</a>
          <a href='/'>Most popular</a>
          <a href='/'>About</a>
          <a href='/'>
            <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login ✋</button>
          </a>
        </div>
      </div>
      {/* Desktop menu */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
        <a href='/'>Home</a>
        <a href='/'>Trending</a>
        <a href='/'>Most popular</a>
        <a href='/'>About</a>
        <a href='/'>
          <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login ✋</button>
        </a>
      </div>
    </div>
  )
}

export default Navbar