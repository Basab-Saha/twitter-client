import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
export const FeedCard : React.FC=()=>{
    return(
        <div className="border border-b-0 border-r-0 border-l-0 text-sm  border-gray-600 hover:bg-slate-800 transition-all cursor-pointer">
            <div className="grid grid-cols-12 gap-3 p-2 mt-5 px-4">

                <div className="col-span-1">
                  <Image src="https://pbs.twimg.com/profile_images/1689835558481141760/d3xnqid4_400x400.jpg" className="rounded-full" alt="" height={50} width={50}/> 
                </div>

                <div className="col-span-11">
                    <h5>Basab Saha</h5>
                    <p>Today I saw a video on Docker and thanks to @piyushgarg_dev for providing such amazing content on YT and thanks to 
                    @ezSnippet for suggesting this GOLD. </p>

                    <div className="flex justify-between mt-4 text-xl p-4 w-[90%]">
                        <div>
                            <BiMessageRounded/>
                        </div>
                            
                        <div>
                           <FaRetweet/>
                        </div>

                        <div>
                            <AiOutlineHeart/>
                        </div>

                        <div>
                            <BiUpload/>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
    )
}