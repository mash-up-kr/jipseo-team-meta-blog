"use client";

import SunIcon from "@/_assets/sun-icon.svg";
import { useState } from "react";

const ThemeToggle = () => {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setActive((a) => !a)}
      className={`
        w-[48px] h-[28px] py-[4px] gap-[40px] flex items-center rounded-full transition-colors
        ${active ? "bg-gray-300" : "bg-gray-200"}
        shadow-inner relative
      `}
    >
      <span
        className={` p-[5px] bg-white rounded-full shadow flex items-center justify-center
          absolute top-1/2 -translate-y-1/2 transition-all duration-300
          ${active ? "right-[2px]" : "left-[2px]"}
        `}
      >
        <SunIcon />
      </span>
    </button>
  );
};

export default ThemeToggle;
