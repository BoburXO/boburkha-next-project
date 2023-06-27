import Image from "next/image";
import React from "react";
import s from "./footer.module.css";

const Footer = () => {
  return (
    <div className={s.container}>
      <div>©2023 BoburKha. All rights reserved.</div>
      <div className={s.social}>
        <Image className={s.icon} src="/1.png" width={25} height={25} alt="boburkha facebook" />
        <Image className={s.icon} src="/2.png" width={25} height={25} alt="boburkha instagram" />
        <Image className={s.icon} src="/3.png" width={25} height={25} alt="boburkha twitter" />
        <Image className={s.icon} src="/4.png" width={25} height={25} alt="boburkha youtube" />
      </div>
    </div>
  );
};

export default Footer;
