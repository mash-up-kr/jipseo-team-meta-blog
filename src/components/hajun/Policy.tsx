import Link from 'next/link';

const POLICY_LIST = [
  {
    label: 'Terms of Use',
    href: '/terms-of-use',
  },
  {
    label: 'Privacy Policy',
    href: '/privacy-policy',
  },

  {
    label: 'Cookie Policy',
    href: '/cookie-policy',
  },
];

function Policy() {
  return (
    <div className="flex gap-x-[16px]">
      {POLICY_LIST.map(({ href, label }) => (
        <Link
          href={href}
          key={label}
          className="pl-[16px] first:pl-0 border-l-[1px] first:border-l-0 border-[#E8E8EA] text-[#3B3C4A]"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

export default Policy;
