import Image from "next/image";
import s from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <h1>Better design for your digital products.</h1>
        <p>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={s.item}>
        <Image src={Hero} alt="Hero" />
      </div>
    </div>
  );
}