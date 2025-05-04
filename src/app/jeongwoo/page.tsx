import Header from "@/_components/Header";
import Banner from "@/_components/Banner";
import Space from "@/_components/common/Space";
import Feed from "@/_components/Feed";
import Post from "@/_components/Post";
import Advertise from "@/_components/Advertise";
import Footer from "@/_components/Footer";
import BannerThumbnail from "@/_assets/banner-thumbnail.jpg";
import AuthorImage from "@/_assets/author-image.jpg";
import { StaticImageData } from "next/image";

export interface BannerPostData {
  title: string;
  category: string;
  thumbnail: StaticImageData;
  authorName: string;
  authorImage: StaticImageData;
  date: string;
}

const bannerPostData: BannerPostData[] = [
  {
    title: "The Impact of Technology on the Workplace: How Technology is Changing",
    category: "Technology",
    thumbnail: BannerThumbnail,
    authorName: "Jason Francisco",
    authorImage: AuthorImage,
    date: "August 20, 2022",
  },
  {
    title: "AI와 미래 사회: 인공지능이 바꾸는 일상",
    category: "AI",
    thumbnail: BannerThumbnail,
    authorName: "Kim Minseo",
    authorImage: AuthorImage,
    date: "September 1, 2022",
  },
  {
    title: "React로 만드는 모던 웹앱 구조",
    category: "Frontend",
    thumbnail: BannerThumbnail,
    authorName: "Lee Jieun",
    authorImage: AuthorImage,
    date: "September 10, 2022",
  },
  {
    title: "클라우드 컴퓨팅의 현재와 미래",
    category: "Cloud",
    thumbnail: BannerThumbnail,
    authorName: "Park Jisoo",
    authorImage: AuthorImage,
    date: "September 15, 2022",
  },
  {
    title: "UI/UX 디자인 트렌드 2023",
    category: "Design",
    thumbnail: BannerThumbnail,
    authorName: "Choi Hana",
    authorImage: AuthorImage,
    date: "September 20, 2022",
  },
  {
    title: "데이터 사이언스 입문자를 위한 가이드",
    category: "Data Science",
    thumbnail: BannerThumbnail,
    authorName: "Jung Woojin",
    authorImage: AuthorImage,
    date: "September 25, 2022",
  },
  {
    title: "스타트업에서의 DevOps 문화",
    category: "DevOps",
    thumbnail: BannerThumbnail,
    authorName: "Seo Yuna",
    authorImage: AuthorImage,
    date: "October 1, 2022",
  },
  {
    title: "모바일 앱 개발의 모든 것",
    category: "Mobile",
    thumbnail: BannerThumbnail,
    authorName: "Han Donghyun",
    authorImage: AuthorImage,
    date: "October 5, 2022",
  },
  {
    title: "보안의 기본: 안전한 웹 만들기",
    category: "Security",
    thumbnail: BannerThumbnail,
    authorName: "Lim Sumin",
    authorImage: AuthorImage,
    date: "October 10, 2022",
  },
];

const JeongwooBlogPage = () => {
  return (
    <div className="w-screen">
      <div className="w-full">
        <Header />

        <Banner postData={bannerPostData[0]} />

        <Space size={144} />

        <div>
          <Advertise />
          <Space size={80} />
          <div>
            <Feed>
              {bannerPostData.map((post, idx) => (
                <Post key={idx} postData={post} />
              ))}
            </Feed>
            <Space size={32} />
            <button className="py-[12px] px-[20px] border border-[#D9D9DE] rounded-[6px] mx-auto block text-[#797C86] text-[20px] font-medium leading-[28px] bg-white hover:bg-[#F5F5F7] transition-colors font-['Work_Sans',sans-serif]">
              View All Post
            </button>
          </div>
        </div>

        <Space size={80} />
        <Advertise />
      </div>

      <Space size={100} />
      <Footer />
    </div>
  );
};

export default JeongwooBlogPage;
