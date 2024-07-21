"use client"

import React from 'react'
import Link from 'next/link'
import { MainItems, TopicItems, ResourceItems, FooterItems } from '@/constants/SidebarDefs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Sidebar() {

    const pathname = usePathname();

    return (
        <div className="w-full p-4 max-w-[250px] min-w-[250px] fixed h-screen border-r border-r-[#161616]">
            <ul className='py-2'>
                {MainItems.map((item, idx) => (
                    <li key={idx} >
                        <Link href={item.link} 
                        className={`flex items-center transition duration-200 
                            ${pathname === item.link ? 'bg-[#656565]' : "hover:bg-[#161616] "}
                        cursor-pointer py-2 px-5 rounded-lg`}>
                            <Image
                                src={item.icon}
                                alt="home"
                                className='h-[1.5rem] w-[1.5rem]'
                            />
                            <span className='ml-[1rem] text-sm font-md'>
                                {item.label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            <hr className='w-full border-[#161616]' />

            <ul className='py-2'>
                <h1 className='text-[#646464] px-5 py-2 text-sm font-semibold'>Topics</h1>
                {TopicItems.map((item, idx) => (
                    <li key={idx} >
                        <Link href="/" className='flex items-center transition duration-200 hover:bg-[#161616] cursor-pointer py-2 px-5 rounded-lg'>
                            <Image
                                src={item.icon}
                                alt="home"
                                className='h-[1.5rem] w-[1.5rem]'
                            />
                            <span className='ml-[1rem] text-sm font-md'>
                                {item.label}
                            </span>
                        </Link>

                    </li>
                ))}
            </ul>

            <hr className='w-full border-[#161616]' />

            <ul className='py-2'>
                <h1 className='text-[#646464] px-5 py-2 text-sm font-semibold'>Resources</h1>
                {ResourceItems.map((item, idx) => (
                    <li key={idx} >
                        <Link href="/" className='flex items-center transition duration-200 hover:bg-[#161616] cursor-pointer py-2 px-5 rounded-lg'>
                            <Image
                                src={item.icon}
                                alt="home"
                                className='h-[1.5rem] w-[1.5rem]'
                            />
                            <span className='ml-[1rem] text-sm font-md'>
                                {item.label}
                            </span>
                        </Link>

                    </li>
                ))}
            </ul>

            <hr className='w-full border-[#161616]' />

            <ul className='py-2'>
                {FooterItems.map((item, idx) => (
                    <li key={idx} >
                        <Link href="/" className='flex items-center transition duration-200 hover:bg-[#161616] cursor-pointer py-2 px-5 rounded-lg'>
                            <Image
                                src={item.icon}
                                alt="home"
                                className='h-[1.5rem] w-[1.5rem]'
                            />
                            <span className='ml-[1rem] text-sm font-md'>
                                {item.label}
                            </span>
                        </Link>

                    </li>
                ))}
            </ul>
        </div>
    )
}
