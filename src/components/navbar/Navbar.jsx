"use client";

import Link from "next/link";
import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import s from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  }
];

const Navbar = () => {
  return (
    <div className={s.container}>
      <Link className={s.logo} href="/">
        boburkha
      </Link>
      <div className={s.links}>
        <DarkMode/>
        {links?.map((link) => (
          <Link href={link.url} key={link.id} className={s.link}>
            {link.title}
          </Link>
        ))}
        <button className={s.logout} onClick={() => console.log("Logged out!")}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
