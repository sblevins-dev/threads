import images from '@/public/icons'
import Image from 'next/image'
import React from 'react'
import SearchBar from './ui/SearchBar'

export default function Header() {
  return (
    <div 
        className='fixed py-2 px-5 gap-20 mb-20 h-14 w-full z-10 border-b border-b-[#161616] flex items-center justify-between'>
      <div className='flex items-end h-full'>
        <Image 
            src={images.logo}
            alt="logo"
            className='w-auto h-full'
        />
        <span className='ml-2 font-bold text-2xl'>
            Threads
        </span>
      </div>

      <SearchBar />

      <button type='button' className='bg-red-500 rounded-lg px-2 py-1'>
        Log In
      </button>
    </div>
  )
}
