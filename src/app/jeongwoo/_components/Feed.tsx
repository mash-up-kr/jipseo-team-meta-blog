import * as React from "react";

interface FeedProps {
  children: React.ReactNode;
}

const Feed = ({ children }: FeedProps) => {
  return (
    <div className="max-w-[1218px] m-auto font-['Work_Sans',sans-serif]">
      <h3 className="text-[24px] leading-[28px] text-[#181A2A] font-black mb-[32px]">Latest Post</h3>
      <div className="grid grid-cols-3 gap-[20px]">{children}</div>
    </div>
  );
};

export default Feed;
