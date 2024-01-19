import Image from "next/image";

import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";

import { Inter } from "next/font/google";
import { BiHash, BiHomeCircle, BiNotification, BiUser } from "react-icons/bi";
import { FeedCard } from "@/components/FeedCard";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton{
  title:string,
  icon:React.ReactNode
}

const SideBarMenuItems : TwitterSidebarButton[]=[
  {
    title:'Home',
    icon:<BiHomeCircle />
  },
  {
    title:'Explore',
    icon:<BiHash/>
  },
  {
    title:'Notifications',
    icon:<BsBell/>
  },
  {
    title:'Messages',
    icon:<BsEnvelope/>
  },
  {
    title:'Bookmarks',
    icon:<BsBookmark/>
  },
  {
    title:'Profile',
    icon:<BiUser/>
  }
]

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56 pl-60">

      {/*Left SideBar */}
        <div className="col-span-3  justify-start pt-8 ">

        <div className="text-3xl hover:bg-gray-600 rounded-full p-2 h-fit transition-all cursor-pointer w-fit ">
          <BsTwitter  />
        </div>

        <div className="mt-4 text-xl font-semibold pr-4">

          <ul>
            {SideBarMenuItems.map((item) => {
              return <li key={item.title} className="flex justify-start items-center gap-2 hover:bg-gray-600 rounded-full px-5 py-2 w-fit cursor-pointer mt-4 ">
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>;
            })}
          </ul>

          <div className="mt-5 px-3">
            <button className="bg-[#1d9bf0] p-4 font-semibold rounded-full w-full ">Tweet</button>
          </div>
        </div>

        </div>
        <div className="col-span-6 border-r-[1px] border-l-[0.5px] border-gray-600">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
