import * as React from "react";
import About from "@/_components/Footer/About";
import QuickLink from "@/_components/Footer/QuickLink";
import Category from "@/_components/Footer/Category";
import Newsletter from "@/_components/Footer/Newsletter";
import Policy from "@/_components/Footer/Policy";
import CopyRightIcon from "@/_assets/copyright-icon.svg";

export interface LinkProps {
  label: string;
  href: string;
}

const quickLinks: LinkProps[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Archived", href: "/archived" },
  { label: "Author", href: "/author" },
  { label: "Contact", href: "/contact" },
];

const categories: LinkProps[] = [
  { label: "Lifestyle", href: "/category/lifestyle" },
  { label: "Technology", href: "/category/technology" },
  { label: "Travel", href: "/category/travel" },
  { label: "Business", href: "/category/business" },
  { label: "Economy", href: "/category/economy" },
  { label: "Sports", href: "/category/sports" },
];

const policyLinks = [
  { label: "Terms of Use", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F9] pt-[64px] pb-[32px] px-0 font-['Work_Sans',sans-serif]">
      <div className="max-w-[1218px] mx-auto flex flex-wrap gap-[32px] justify-between">
        <About />
        <div className="flex flex-1 gap-[80px] justify-center">
          <QuickLink links={quickLinks} />
          <Category links={categories} />
        </div>
        <Newsletter />
      </div>

      <div className="max-w-[1218px] mx-auto border-t border-[#E8E8EA] my-[40px]"></div>

      <div className="max-w-[1218px] mx-auto flex flex-wrap justify-between items-center gap-[16px]">
        <div className="flex items-center gap-[12px]">
          <CopyRightIcon />
        </div>
        <Policy links={policyLinks} />
      </div>
    </footer>
  );
};

export default Footer;
