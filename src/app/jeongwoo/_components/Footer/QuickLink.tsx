import * as React from "react";
import { LinkProps } from "@/_components/Footer";
import Link from "next/link";

interface QuickLinkProps {
  links: LinkProps[];
}

const QuickLink = ({ links }: QuickLinkProps) => {
  return (
    <div>
      <h4 className="font-bold text-[20px] leading-[28px] text-[#181A2A] mb-[20px]">Quick Link</h4>
      <ul className="space-y-[8px] text-[#181A2A] text-[16px] leading-[24px]">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLink;
