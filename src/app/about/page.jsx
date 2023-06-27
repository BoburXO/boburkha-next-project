import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import s from "./page.module.css";

const About = () => {
  return (
    <div className={s.container}>
      <div className={s.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="About"
          fill={true}
          className={s.aboutImg}
        />
        <div className={s.imgText}>
          <h1>Digital Storytellers</h1>
          <h2>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={s.textContainer}>
        <div className={s.item}>
          <h1>Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            vitae velit enim, voluptates facilis officiis delectus expedita
            explicabo. Accusantium odit, aliquam at cum voluptate, unde minima
            repudiandae provident tenetur delectus deserunt placeat minus rem!
            Non consectetur quibusdam expedita itaque impedit earum iure odio,{" "}
            <br />
            <br />
            voluptate adipisci debitis esse mollitia in natus officia omnis eos
            consequuntur maxime facilis modi a minus officiis aliquid
            voluptatibus iusto. Perferendis magni odit molestias ducimus
            repudiandae distinctio asperiores aut? <br /> <br /> Ipsum quo eum
            placeat, amet corrupti, exercitationem doloribus numquam nisi facere
            velit modi consequatur laudantium unde ratione consequuntur nostrum
            consectetur in rerum molestiae expedita quam. Nisi, tempora
            voluptate?
          </p>
        </div>
        <div className={s.item}>
          <h1>What We Do?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet hic
            nisi quaerat ex eligendi laboriosam aperiam corporis sed tempora quo
            harum natus debitis quasi eum iste, alias, vel eaque distinctio
            illum neque unde praesentium! Cumque illum nostrum blanditiis ex
            quas modi maiores omnis error maxime.
            <br />
            <br />
            - Lorem ipsum dolor sit amet consectetur.
            <br />
            <br />
            - Lorem ipsum dolor sit amet consectetur adipisicing.
            <br />
            <br />
            - Lorem ipsum dolor sit amet.
            <br />
            <br />
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
