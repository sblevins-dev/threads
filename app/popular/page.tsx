import FeedList from '@/components/FeedList'
import PopularCommunityModal from '@/components/PopularCommunityModal'
import { HomeFeed } from '@/constants/StaticFeed'
import React from 'react'

export default function page() {

    const popular = HomeFeed.sort((a, b) => b.upvotes - a.upvotes)

    return (
        <section className='px-2'>
            <div className="flex justify-center">
                <FeedList feed={popular} />

                <div className="max-w-[300px] min-w-[300px] h-full px-2">
                    <PopularCommunityModal />
                </div>
            </div>
        </section>
    )
}
