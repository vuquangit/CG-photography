import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import { RootState } from "@/store/rootReducer";
import LogoIcon from '../assets/images/logo.svg'



const navListLeft = [
  {
    href: "/",
    title: "Home",
    icon: "",
  },
  {
    href: "/blog",
    title: "Blog",
    icon: "",
  },
];

const navListRight = [
  {
    href: "/about",
    title: "About",
    icon: "",
  },
  {
    href: "/contact",
    title: "Contact",
    icon: "",
  },
];

const Header: React.FC = () => {
  const headerTextColor = useSelector(
    (state: RootState) => state.themeHeader.color
  );

  return (
    <header className="absolute top-0 left-0 w-full transition z-1000">
      <div className="flex items-center justify-center my-8 flex-column">
        <ul className="flex flex-row items-center justify-center mr-16 space-x-16">
          {navListLeft.map((item, index) => (
            <li
              key={`${item.href}${index}`}
              className="flex-auto p-4 text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              style={{ color: headerTextColor }}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>

        {/* <Link href="/"> */}
          <LogoIcon className="h-20 md:h-22 lg:h-24" />
        {/* </Link> */}

        <ul className="flex flex-row items-center justify-center ml-16 space-x-16">
          {navListRight.map((item, index) => (
            <li
              key={`${item.href}${index}`}
              className="flex-auto p-4 text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              style={{ color: headerTextColor }}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
