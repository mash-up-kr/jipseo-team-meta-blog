import LightMode from './svg/LightMode';
import MetaBlog from './svg/MetaBlog';
import Search from './svg/Search';

function Header() {
  return (
    <header className="max-w-7xl mx-auto py-[32px] flex justify-between items-center px-[31px]">
      <h1 aria-label="Meta Blog">
        <MetaBlog />
      </h1>
      <nav>
        <ul className="flex gap-x-[40px]">
          <li className="text-base">Home</li>
          <li className="text-base">Blog</li>
          <li className="text-base">Single Post</li>
          <li className="text-base">Pages</li>
          <li className="text-base">Contact</li>
        </ul>
      </nav>

      <div className="flex gap-x-[40px] items-center">
        <div className="bg-[#F4F4F5] rounded-[8px] py-[8px] pl-[16px] pr-[8px] relative">
          <input placeholder="Search" />
          <Search className="absolute right-[8px] top-[10px]" />
        </div>
        <div>
          <button className={'flex bg-[#E8E8EA] rounded-[20px] p-[2px] pr-[22px]'}>
            <LightMode />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
