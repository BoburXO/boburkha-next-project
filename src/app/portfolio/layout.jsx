import React from "react";
import s from "../portfolio/page.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={s.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
