function About() {
  return (
    <div className="flex flex-col gap-y-[24px]">
      <div className="flex flex-col gap-y-[12px]">
        <span className="text-lg font-semibold">About</span>
        <p className="text-sm text-[#97989F] whitespace-pre-wrap">
          {
            'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore\net dolore magna aliqua. Ut enim ad\nminim veniam'
          }
        </p>
      </div>
      <div className="flex flex-col gap-y-[4px]">
        <span className="text-base font-normal font-[#3B3C4A]">
          <span className="text-base font-semibold">Email : </span>info@jstemplate.net
        </span>
        <span className="text-base font-normal font-[#3B3C4A]">
          <span className="text-base font-semibold">Phone : </span>880123 456 890
        </span>
      </div>
    </div>
  );
}

export default About;
