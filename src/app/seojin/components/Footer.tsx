import FooterLogo from "../svg/FooterLogo";

function Footer() {
  return (
    <footer className="bg-[#F6F6F7] text-sm text-[#181A2A]">
      <div className="max-w-5xl mx-auto flex justify-between gap-6 px-8 py-12">
        {/* About */}
        <div className="basis-1/4">
          <h2 className="font-semibold text-lg mb-5">About</h2>
          <p className="mb-5 text-[#3B3C4A] leading-relaxed text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="mb-1">
            <span className="font-semibold">Email :</span> info@jstemplate.net
          </p>
          <p>
            <span className="font-semibold">Phone :</span> 880 123 456 789
          </p>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="font-semibold text-lg mb-7">Quick Link</h2>
          <ul className="space-y-2 text-[#3B3C4A] text-base">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Archived</li>
            <li className="cursor-pointer">Author</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Category */}
        <div>
          <h2 className="font-semibold text-lg mb-7">Category</h2>
          <ul className="space-y-2 text-[#3B3C4A] text-base">
            <li className="cursor-pointer">Lifestyle</li>
            <li className="cursor-pointer">Technology</li>
            <li className="cursor-pointer">Travel</li>
            <li className="cursor-pointer">Business</li>
            <li className="cursor-pointer">Economy</li>
            <li className="cursor-pointer">Sports</li>
          </ul>
        </div>

        {/* Weekly Newsletter */}
        <div className="bg-white w-full text-center max-w-xs rounded-2xl border border-[#E8E8EA] px-6 pt-6 pb-1">
          <h2 className="font-semibold text-base mt-2 mb-1">
            Weekly Newsletter
          </h2>
          <p className="text-sm text-[#97989F] mb-6">
            Get blog articles and offers via email
          </p>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 border border-[#E8E8EA] px-4 py-2 rounded-md text-sm"
            />
          </div>
          <button className="w-full bg-[#4B6BFB] text-white px-2 py-3 rounded-l  text-sm">
            Subscribe
          </button>
        </div>
      </div>

      {/* 하단 */}
      <div className="border-t border-[#E8E8EA] py-6 px-8">
        <div className="max-w-5xl px-10 mx-auto flex flex-col sm:flex-row justify-between items-center ">
          <div className="flex items-center gap-5">
            <FooterLogo />
            <p className="text-[#313131] text-xs">
              © JS Template 2023. All Rights Reserved.
            </p>
          </div>

          <div className="flex gap-x-5 text-xs text-[#3b3b3b]">
            <span className="cursor-pointer">Terms of Use</span>
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
