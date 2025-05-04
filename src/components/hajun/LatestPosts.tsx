import Image from 'next/image';

interface PostPreview {
  id: number;
  title: string;
  category: string;
  content: string;
  thumbnailSrc: string;
  author: {
    profileSrc: string;
    name: string;
  };
  createdAt: string;
}

interface LatestPostsProps {
  posts: Array<PostPreview>;
}

function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <div className="flex flex-col gap-[32px]">
      <h2 className="text-2xl font-bold">Latest Post</h2>
      <div className="grid grid-cols-3 gap-[20px]">
        {posts.map(post => (
          <div
            key={post.id}
            className="flex flex-col gap-[16px] border-[1px] border-[#E8E8EA] rounded-[6px] p-[16px]"
          >
            <div className="relative w-full h-[240px]">
              <Image src={post.thumbnailSrc} alt={''} fill objectFit="cover" />
            </div>

            <div className="flex flex-col gap-[20px] p-[8px]">
              <div className="flex flex-col gap-[16px] items-start">
                <span className="text-sm py-[4px] px-[10px] bg-[#4B6BFB]/5 rounded-[6px] text-[#4B6BFB]">
                  {post.category}
                </span>
                <span className="text-2xl font-bold text-[#181A2A]">{post.title}</span>
              </div>

              <div className="flex gap-[20px] items-center">
                <div className="flex items-center gap-[12px]">
                  <Image
                    src={post.author.profileSrc}
                    alt={''}
                    width={36}
                    height={36}
                    objectFit="cover"
                    className="rounded-[50%]"
                  />
                  <span className="text-base font-medium text-[#97989F]">{post.author.name}</span>
                </div>

                <span className="text-base text-[#97989F]">{post.createdAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full">
        <button className="py-[12px] px-[20px] border-[1px] border-[#696A75]/30 rounded-[6px] text-[#696A75] font-medium">
          View All Post
        </button>
      </div>
    </div>
  );
}

export default LatestPosts;
