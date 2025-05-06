import { BannerPostData } from "@/page";
import Image from "next/image";
import Post from "@/_components/Post";

interface BannerProps {
  postData: BannerPostData;
}

const Banner = ({ postData }: BannerProps) => {
  return (
    <div className="max-w-[1218px] m-auto relative">
      <Image
        className="object-cover rounded w-max-[1216px]"
        src={postData.thumbnail}
        alt={postData.title}
        width={1216}
        height={600}
      />
      <div className="absolute bottom-[-64px] left-[64px]">
        <Post postData={postData} isBanner={true} />
      </div>
    </div>
  );
};

export default Banner;
