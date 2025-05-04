import Image from 'next/image';
import React from 'react';
import mainThumbnail from '@/assets/hajun/images/main-thumbnail-min.jpg';
import profileImage from '@/assets/hajun/images/profile-image-min.jpg';

function MainThumbnail() {
  return (
    <div className="relative">
      <div className="relative w-full h-[600px]">
        <Image className="rounded-[12px]" src={mainThumbnail.src} fill alt="" />
      </div>

      <div className="absolute bottom-[-64px] left-[64px] flex flex-col gap-y-[24px] bg-white rounded-[12px] p-[40px] border-[1px] border-[#E8E8EA] drop-shadow-[0px_12px_24px_-6px_#181A2A]">
        <div className="flex flex-col gap-y-[16px] items-start">
          <span className="text-white text-sm font-bold bg-[#4B6BFB] py-[4px] px-[10px] rounded-[6px]">
            Technology
          </span>
          <p className="text-4xl font-bold whitespace-pre-wrap">
            {'The Impact of Technology on\nthe Workplace: How\nTechnology is Changing'}
          </p>
        </div>

        <div className="flex gap-[20px] items-center">
          <div className="flex gap-[12px] items-center">
            <Image src={profileImage.src} width={36} height={36} alt="" className="rounded-[50%]" />
            <span className="text-base font-medium text-[#97989F]">Jason Francisco</span>
          </div>

          <span className="text-base font-normal text-[#97989F]">August 20, 2022</span>
        </div>
      </div>
    </div>
  );
}

export default MainThumbnail;
