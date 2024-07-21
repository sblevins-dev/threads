import images from '@/public/icons'
import Image from 'next/image'
import React from 'react'

export default function ShareBadge() {
  return (
    <div className='rounded-full bg-[#161616] max-w-max px-5 h-8 flex items-center cursor-pointer'>
      <Image 
        src={images.share}
        alt="share icon"
        className='w-5 h-5 mr-2'
      />
      <span className='text-sm font-medium'>
        Share
      </span>
    </div>
  )
}
