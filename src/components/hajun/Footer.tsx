import About from './About';
import CopyRight from './CopyRight';
import LinkList from './LinkList';
import Policy from './Policy';
import Subscribe from './Subscribe';

function Footer() {
  return (
    <div className="w-full bg-[#F6F6F7]">
      <div className="flex flex-col max-w-7xl w-full mx-auto pt-[64px]">
        <div className="flex justify-between gap-x-[20px] py-[64px] border-b-[1px] border-[#E8E8EA]">
          <About />

          <div className="flex gap-x-[80px] px-[118px]">
            <LinkList title="Quick Link" links={DUMMY_QUICK_LINKS} />
            <LinkList title="Category" links={DUMMY_CATEGORY_LINKS} />
          </div>

          <Subscribe />
        </div>

        <div className="flex justify-between items-center gap-x-[20px] py-[32px]">
          <CopyRight />
          <Policy />
        </div>
      </div>
    </div>
  );
}

const DUMMY_QUICK_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Archived',
    href: '/archived',
  },
  {
    label: 'Author',
    href: '/author',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const DUMMY_CATEGORY_LINKS = [
  {
    label: 'Lifestyle',
    href: '/lifestyle',
  },
  {
    label: 'Technology',
    href: '/technology',
  },
  {
    label: 'Travel',
    href: '/travel',
  },
  {
    label: 'Business',
    href: '/business',
  },
  {
    label: 'Economy',
    href: '/economy',
  },
  {
    label: 'Sports',
    href: '/sports',
  },
];

export default Footer;
