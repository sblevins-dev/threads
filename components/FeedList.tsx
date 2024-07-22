import React from 'react'
import VoteBadge from './ui/VoteBadge'
import CommentBadge from './ui/CommentBadge'
import ShareBadge from './ui/ShareBadge'

interface Posts {
    id: number,
    topic: string,
    date: string,
    title: string,
    upvotes: number,
    details: string,
}

interface FeedListProps {
    feed: Posts[];
}

export default function FeedList({ feed }: { feed: FeedListProps["feed"] }) {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }

        return date.toLocaleString('en-US', options);
    }
    return (
        <div className='flex-grow max-w-[800px]'>

            <hr className='w-full border-[#161616] mb-2' />

            <ul>
                {feed.map((post: {
                    id: number,
                    topic: string,
                    date: string,
                    title: string,
                    upvotes: number,
                    details: string,
                }) => (
                    <React.Fragment key={post.id}>
                        <li key={post.id} className='p-2 hover:bg-gray-900 rounded-lg transition duration-200'>

                            {/* Post Content */}
                            <div className='text-xs flex items-center mb-2'>
                                <div className="w-5 h-5 rounded-full bg-white mr-4">

                                </div>

                                <span>
                                    {post.topic}{" "}&bull;{" "}{formatDate(post.date)}
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
                    </React.Fragment>
                ))}
            </ul>

        </div>
    )
}
