import BlockImg from "./page_components/BlockImg";
import TitleUp from "../../main_components/Title/TitleUp";
import Card from "../../main_components/Card/Card";
import imgCard from "../../media/img/58a6674c-bedc-4ba4-a14f-1c27acee4d7b.jpg";

const Home = () => {
  return (
    <main className="relative pb-28 bg-colorBackground shadow-md z-10">
      <BlockImg />
      <div className="mx-8">
        <TitleUp content={"Мои последние работы"} />

        {/* table */}
        <div className="grid grid-cols-1 gap-8">
          <Card img={imgCard} title={"Сервис изучения английского"} link={"Подробней"} />
          <Card img={imgCard} title={"Сервис изучения английского"} link={"Подробней"} />
          <Card img={imgCard} title={"Сервис изучения английского"} link={"Подробней"} />
          <Card img={imgCard} title={"Сервис изучения английского"} link={"Подробней"} />
        </div>
      </div>
    </main>
  );
};
export default Home;
