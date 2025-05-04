import * as React from "react";
import Image, { StaticImageData } from "next/image";

interface AuthorProps {
  image: StaticImageData;
  name: string;
}

const Author = ({ image, name }: AuthorProps) => {
  return (
    <div className="flex gap-[12px]">
      <Image className="rounded-full" src={image} alt={name} width={36} height={36} />
      <div className="content-center font-bold text-[16px] leading-[24px] text-[#97989F]">{name}</div>
    </div>
  );
};

export default Author;
