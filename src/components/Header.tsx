import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

import { RootState } from "@/store/rootReducer";
import Logo from "@/assets/images/chang-gio-logo.png";

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
    <header className="absolute top-0 left-0 z-1000 w-full transition">
      <div className="flex flex-column justify-center items-center my-8">
        <ul className="flex flex-row justify-center items-center space-x-16 mr-16">
          {navListLeft.map((item, index) => (
            <li
              key={`${item.href}${index}`}
              className="flex-auto p-4 text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              style={{ color: headerTextColor }}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <div>
          <Link href="/">
            <img
              className="cursor-pointer h-24 w-48 bg-transparent transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>

        <ul className="flex flex-row justify-center items-center space-x-16 ml-16">
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
