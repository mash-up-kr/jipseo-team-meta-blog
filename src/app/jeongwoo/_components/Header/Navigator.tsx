import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Single Post", href: "/post" },
  { label: "Pages", href: "/pages" },
  { label: "Contact", href: "/contact" },
];

const Navigator = () => {
  return (
    <nav className="flex f h-[24px] justify-center gap-[40px]" aria-label="navigator">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          aria-label={item.label}
          className="flex items-center text-gray-600 hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigator;
