import * as React from "react";

interface CategoryProps {
  children: string;
  isBanner?: boolean;
}

const Category = ({ children, isBanner = false }: CategoryProps) => {
  return (
    <span
      className={
        isBanner
          ? "bg-[#5276F8] text-white px-[10px] py-[4px] rounded-[6px] font-bold text-[14px] leading-[20px]"
          : "bg-[#F5F8FF] text-[#5276F8] px-[10px] py-[4px] rounded-[6px] font-bold text-[14px] leading-[20px]"
      }
    >
      {children}
    </span>
  );
};

export default Category;
