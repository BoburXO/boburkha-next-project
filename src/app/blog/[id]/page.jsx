import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import s from "./page.module.css";

async function getById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    //har gal render boganda uje refresh bogan data lani fetch qiladi
    cache: "no-store",

    // next: { revalidate: 7 },
    //har 7 sekundda fetch  qilib turadi optimization ga kotta yordam beradi
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getById(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getById(params.id);

  return (
    <div className={s.container}>
      <div className={s.top}>
        <div className={s.info}>
          <h1>{data.title}</h1>

          <p>
            Поздравляем Team Vitality, чемпионов BLAST.TV Paris Major 2023! За
            весь турнир они не проиграли ни одной карты, завершив превосходное
            выступление победой над GamerLegion в финале.
          </p>

          <p>{data.body}</p>
          <div className={s.author}>
            <Image src="/csgo.avif" alt="Test" width={50} height={50} />
            <span>Bobur Khatamov</span>
          </div>
        </div>
        <div className={s.imgCon}>
          <Image src="/ak.jpg" alt="CS:GO" fill={true} />
        </div>
      </div>
      <div className={s.content}>
        <p>
          Зайдите в меню снаряжения, чтобы выбрать, с каким оружием идти в бой!
          Выберите снаряжение для каждой из сторон: четыре пистолета, пять видов
          оружия средней дистанции (пистолетов-пулемётов и тяжёлого оружия) и
          пять винтовок (да, можно взять обе M4). Просто перетащите нужное
          оружие в соответствующие ячейки.
          <br />
          <br />
          В меню покупки тоже внесены изменения, в том числе возможность вернуть
          деньги за купленное в текущем раунде оружие, которое вы ещё не
          использовали, а также индикаторы снаряжения ваших товарищей по
          команде.
          <br />
          <br />
          Ограниченный тест теперь включает совершенно новые инструменты
          Counter-Strike 2 для мастерской, позволяющие создавать раскраски для
          оружия, наклейки и карты. Включить и скачать инструменты можно во
          внутриигровом меню настроек. В сегодняшнем обновлении ещё много чего
          нового — от изменения дымовых гранат до системы ввода и анимаций.
          Участвуйте в ограниченном тесте и отправляйте свои отзывы по адресу
          cs2team [@] valvesoftware [точка] com (обязательно укажите CS2LT в
          теме письма).
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
