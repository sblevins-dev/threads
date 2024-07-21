import images from '@/public/icons'
import Image from 'next/image'
import React from 'react'

export default function VoteBadge({ upVotes } : { upVotes: number}) {
  
  return (
    <div className='rounded-full bg-[#161616] max-w-max h-8 flex items-center'>
      <div className='w-8 h-full rounded-full cursor-pointer hover:bg-green-950 flex justify-center p-2'>
        <Image
          src={images.arrow}
          alt="arrow"
          className='object-cover rounded-full'
        />
      </div>

      <span className='text-sm font-medium'>
        {upVotes > 0 ? upVotes : "Vote"}
      </span>

      <div className='w-8 h-full rounded-full cursor-pointer hover:bg-red-950 flex justify-center p-2'>
        <Image
          src={images.arrow}
          alt="arrow"
          className='object-cover rounded-full rotate-180'
        />
      </div>
    </div>
  )
}
