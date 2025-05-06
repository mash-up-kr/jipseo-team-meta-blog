import * as React from "react";
import { BannerPostData } from "@/page";
import Category from "@/_components/Category";
import Author from "@/_components/Author";
import Image from "next/image";

interface PostProps {
  postData: BannerPostData;
  isBanner?: boolean;
}

const Post = ({ postData, isBanner = false }: PostProps) => {
  return (
    <div
      className={`flex flex-col gap-[16px] rounded-[12px] bg-white font-['Work_Sans',sans-serif] ${
        isBanner
          ? "p-[40px] shadow-[0_12px_24px_-6px_rgba(24,26,42,0.12)]"
          : "p-[16px] border border-[#E8E8EA]"
      }`}
    >
      {!isBanner && (
        <div className="w-[360px] h-[240px] relative overflow-hidden rounded-[6px]">
          <Image src={postData.thumbnail} alt={postData.title} fill className="object-cover" sizes="360px" />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between gap-[16px]">
        <div>
          <div className="mb-[20px]">
            <Category isBanner={isBanner}>{postData.category}</Category>
          </div>
          {isBanner ? (
            <h1 className="font-bold text-[36px] leading-[40px] text-[#181A2A] max-w-[518px]">
              {postData.title}
            </h1>
          ) : (
            <h3 className="font-bold text-[24px] leading-[28px] text-[#181A2A] max-w-[344px]">
              {postData.title}
            </h3>
          )}
        </div>
        <div className="flex gap-[20px] items-center">
          <Author image={postData.authorImage} name={postData.authorName} />
          <div className="text-[#97989F] text-[16px] leading-[24px]">{postData.date}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
