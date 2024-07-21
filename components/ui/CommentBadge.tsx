import images from '@/public/icons'
import Image from 'next/image'
import React from 'react'

export default function CommentBadge() {
  return (
    <div className='rounded-full bg-[#161616] max-w-max px-5 h-8 flex items-center gap-2 cursor-pointer'>
      <Image 
        src={images.comment}
        alt="comment icon"
        className='w-5 h-5'
      />
      <span className='text-sm font-medium'>
        0
      </span>
    </div>
  )
}
