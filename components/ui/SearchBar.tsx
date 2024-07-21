import images from '@/public/icons'
import Image from 'next/image'
import React from 'react'

export default function SearchBar() {
    return (
        <div className='flex items-center w-auto max-w-2xl min-w-96 h-full bg-[#161616] rounded-full px-5'>
            <Image 
                src={images.mag}
                alt="magnifying glass"
                className='h-full w-auto py-2 mr-2'
            />
            <input type="text" className='flex-grow outline-none bg-transparent text-sm' placeholder='Search Threads' />
        </div>
    )
}
