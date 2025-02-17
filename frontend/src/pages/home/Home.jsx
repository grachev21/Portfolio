import BlockImg from "./page_components/BlockImg";
import TitleUp from "../../main_components/Title/TitleUp";
import Card from "../../main_components/Card/Card";
import imgCard from "../../media/img/58a6674c-bedc-4ba4-a14f-1c27acee4d7b.jpg";

import styled from "styled-components";
import styleTools from "../../stylesTool";

const ContainerStyled = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${styleTools.color.colorBackground};
  padding-bottom: 8rem;
`;
const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Три колонки одинаковой ширины */
  grid-gap: 2rem; /* Промежуток между элементами */
  @media (min-width: ${styleTools.size.sm}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Три колонки одинаковой ширины */
    grid-gap: 2rem; /* Промежуток между элементами */
  }

  @media (min-width: ${styleTools.size.md}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Три колонки одинаковой ширины */
    grid-gap: 2rem; /* Промежуток между элементами */
  }
`;

const Home = () => {
  return (
    <ContainerStyled>
      <BlockImg />
      <TitleUp content={"Мои последние работы"} />
      <GridStyled className="Limiter">
        <Card img={imgCard} title={"Сервис изучения английского"} link={"Подробней"} />
        <Card img={imgCard} title={"Сервис изучения английского"} link={"Подробней"} />
        <Card img={imgCard} title={"Сервис изучения английского"} link={"Подробней"} />
        <Card img={imgCard} title={"Сервис изучения английского"} link={"Подробней"} />
      </GridStyled>
    </ContainerStyled>
  );
};
export default Home;
