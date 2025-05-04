import Mail from './svg/Mail';

function Subscribe() {
  return (
    <div className="flex flex-col gap-y-[30px] w-[392px] bg-[#FFFFFF] py-[32px] px-[36px] rounded-[12px]">
      <div className="flex flex-col gap-y-[8px] items-center">
        <span className="text-2xl font-semibold text-[#181A2A]">Weekly Newsletter</span>
        <span className="text-base text-[#696A75]">Get blog articles and offers via email</span>
      </div>

      <div className="flex flex-col gap-y-[8px]">
        <div className="relative flex items-center gap-x-[8px] w-full py-[12px] px-[16px] rounded-[6px] border border-[#DCDDDF]">
          <input type="text" placeholder="Your Email" className="w-full" />
          <Mail className="w-[20px] h-[20px] absolute top-1/2 -translate-y-1/2 right-[16px]" />
        </div>
        <button className="bg-[#4B6BFB] rounded-[6px] p-[12px] text-base font-medium text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
