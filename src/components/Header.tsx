import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { RootState } from "@/store/rootReducer";
import LinkRef from "@/components/Link";
import LogoIcon from "../assets/images/logo.svg";

const navListLeft = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/services",
    title: "Services",
  },
];

const navListRight = [
  {
    href: "/gallery",
    title: "Gallery",
  },
  {
    href: "/blogs",
    title: "Blogs",
  },
];

const Header: React.FC = () => {
  const headerTextColor = useSelector(
    (state: RootState) => state.themeHeader.color
  );

  const titleMenuStyle = classNames(
    "flex-auto p-4 text-xl transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110"
  );

  return (
    <header className="absolute top-0 left-0 w-full transition z-1000">
      <div className="flex items-center justify-center my-8 flex-column">
        <ul className="flex flex-row items-center justify-center mr-16 space-x-16">
          {navListLeft.map((item, index) => (
            <li
              key={`${item.href}${index}`}
              className={titleMenuStyle}
              style={{ color: headerTextColor }}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <LinkRef href="/" passHref>
          <div>
            <LogoIcon
              className="h-20 text-black transition duration-1000 ease-in-out md:h-22 lg:h-24"
              style={{ color: headerTextColor }}
            />
          </div>
        </LinkRef>

        <ul className="flex flex-row items-center justify-center ml-16 space-x-16">
          {navListRight.map((item, index) => (
            <li
              key={`${item.href}${index}`}
              className={titleMenuStyle}
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
