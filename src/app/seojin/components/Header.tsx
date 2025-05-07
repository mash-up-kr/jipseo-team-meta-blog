import logoImage from "../assets/logo-image.png";
import SearchIcon from "../svg/Search";
import LightmodeButton from "../svg/LightmodeButton";

function Header() {
  return (
    <header className="max-w-5xl mx-auto flex justify-between items-center px-8  py-8">
      {/* MetaBlog 로고 이미지 */}
      <h1>
        <img
          src={logoImage.src}
          alt="Meta-Blog Logo"
          className="w-[110px] h-auto"
        />
      </h1>

      {/* navbar */}
      <nav>
        <ul className="flex gap-x-[30px]">
          <li className="text-sm cursor-pointer">Home</li>
          <li className="text-sm cursor-pointer">Blog</li>
          <li className="text-sm cursor-pointer">Single Post</li>
          <li className="text-sm cursor-pointer">Pages</li>
          <li className="text-sm cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* 검색창 & 다크모드 버튼 */}
      <div className="flex items-center gap-x-[20px]">
        <div className="relative flex items-center bg-[#F4F4F5] rounded-lg px-4 py-2">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm outline-none"
          />
          <SearchIcon className="absolute right-2" />
        </div>

        <button className="flex items-center bg-neutral-200 rounded-full p-0.5 pr-6">
          <LightmodeButton />
        </button>
      </div>
    </header>
  );
}

export default Header;
