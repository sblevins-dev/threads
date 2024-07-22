"use client"

import FeedList from "@/components/FeedList";
import PopularCommunityModal from "@/components/PopularCommunityModal";
import { HomeFeed } from "@/constants/StaticFeed";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Posts {
  id: number,
  topic: string,
  date: string,
  title: string,
  upvotes: number,
  details: string,
}

export default function Home() {
  const [homePosts, setHomePosts] = useState<Posts[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setHomePosts(data);
    }

    fetchPosts();
  }, [])


  return (
    <main className="px-2">
      <div className="flex justify-center">
        <FeedList feed={homePosts} />

        <div className="max-w-[300px] min-w-[300px] h-full px-2">
          <PopularCommunityModal />
        </div>

      </div>
    </main>
  );
}
