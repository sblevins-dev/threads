import React from 'react'
import VoteBadge from './ui/VoteBadge'
import CommentBadge from './ui/CommentBadge'
import ShareBadge from './ui/ShareBadge'

export default function FeedList({ feed }) {
    return (
        <div className='flex-grow max-w-[800px]'>

            <hr className='w-full border-[#161616] mb-2' />

            <ul>
                {feed.map((post: { id: React.Key | null | undefined, topic: string, upvotes: number, date: string, title: string, details: string }) => (
                    <>
                        <li key={post.id} className='p-2 hover:bg-gray-900 rounded-lg transition duration-200'>

                            {/* Post Content */}
                            <div className='text-xs flex items-center mb-2'>
                                <div className="w-5 h-5 rounded-full bg-white mr-4">

                                </div>

                                <span>
                                    {post.topic}{" "}&bull;{" "}{post.date}
                                </span>
                            </div>

                            <div>
                                <h1 className='font-bold mb-2'>
                                    {post.title}
                                </h1>
                                <p className='text-sm'>
                                    {post.details}
                                </p>
                            </div>

                            {/* Post Badges */}
                            <div className='flex gap-x-3 mt-2'>
                                <VoteBadge upVotes={post.upvotes} />
                                <CommentBadge />
                                <ShareBadge />
                            </div>
                        </li>

                        <hr className='w-full border-[#161616] m-2' />
                    </>
                ))}
            </ul>

        </div>
    )
}
