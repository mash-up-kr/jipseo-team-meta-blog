import * as React from "react";
import LogoIcon from "@/_assets/logo-icon.svg";
import Navigator from "@/_components/Header/Navigator";
import SearchBar from "@/_components/Header/SearchBar";
import ThemeToggle from "@/_components/Header/ThemeToggle";

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex justify-between py-[32px] max-w-[1218px] mx-auto">
        <LogoIcon aria-label="logo" alt="logo" />
        <div className="flex items-center gap-[137px]">
          <Navigator />
          <div className="flex justify-between items-center gap-[40px] ">
            <SearchBar />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
