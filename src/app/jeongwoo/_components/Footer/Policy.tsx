import Link from "next/link";
import { Fragment } from "react";
import { LinkProps } from "@/_components/Footer";
import DividerIcon from "@/_assets/divider-icon.svg";

interface PolicyProps {
  links: LinkProps[];
}

const Policy = ({ links }: PolicyProps) => {
  return (
    <div className="flex gap-[24px] text-[#797C86] text-[16px] leading-[24px] items-center">
      {links.map((item, index) => (
        <Fragment key={item.label}>
          <Link href={item.href}>{item.label}</Link>
          {index < links.length - 1 && (
            <span className="mx-[8px]">
              <DividerIcon />
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Policy;
