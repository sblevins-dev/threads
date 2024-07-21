import FeedList from "@/components/FeedList";
import PopularCommunityModal from "@/components/PopularCommunityModal";
import { HomeFeed } from "@/constants/StaticFeed";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-2">
      <div className="flex justify-center">
        <FeedList feed={HomeFeed} />

        <div className="max-w-[300px] min-w-[300px] h-full px-2">
          <PopularCommunityModal />
        </div>

      </div>
    </main>
  );
}
