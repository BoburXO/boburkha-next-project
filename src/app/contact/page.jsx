import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import s from "./page.module.css";

const Contact = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Let&apos;s Keep in Touch</h1>
      <div className={s.content}>
        <div className={s.imgCon}>
          <Image src="/contact.png" alt="" fill={true} />
        </div>
        <form className={s.form}>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <textarea placeholder="message" cols="30" rows="10"></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
