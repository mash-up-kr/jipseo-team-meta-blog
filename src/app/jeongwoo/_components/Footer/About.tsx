import * as React from "react";

const About = () => {
  return (
    <div>
      <h4 className="font-bold text-[20px] leading-[28px] text-[#181A2A] mb-[20px]">About</h4>
      <p className="text-[#797C86] text-[16px] leading-[24px] mb-[20px] max-w-[280px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam
      </p>
      <div className="text-[#181A2A] text-[16px] leading-[24px] mb-[4px]">
        <span className="font-bold">Email :</span> info@jstemplate.net
      </div>
      <div className="text-[#181A2A] text-[16px] leading-[24px]">
        <span className="font-bold">Phone :</span> 880 123 456 789
      </div>
    </div>
  );
};

export default About;
