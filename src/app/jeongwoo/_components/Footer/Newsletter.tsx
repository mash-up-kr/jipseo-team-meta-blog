import * as React from "react";
import MailIcon from "@/_assets/mail-icon.svg";
const Newsletter = () => {
  return (
    <div>
      <div className="bg-white rounded-[16px] p-[36px] flex flex-col items-center shadow-sm">
        <h4 className="font-bold text-[20px] leading-[28px] text-[#181A2A] mb-[8px] text-center">
          Weekly Newsletter
        </h4>
        <p className="text-[#797C86] text-[16px] leading-[24px] mb-[20px] text-center">
          Get blog articles and offers via email
        </p>
        <form className="min-w-[320px] w-full flex flex-col gap-[12px]">
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full h-[44px] rounded-[8px] border border-[#E8E8EA] px-[16px] text-[16px] leading-[24px] text-[#181A2A] outline-none"
            />
            <span className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#797C86]">
              <MailIcon />
            </span>
          </div>
          <button
            type="submit"
            className="w-full h-[44px] bg-[#5276F8] text-white font-bold rounded-[8px] text-[16px] leading-[24px] hover:bg-[#3356c7] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
