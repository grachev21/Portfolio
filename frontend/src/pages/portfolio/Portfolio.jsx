import styled from "styled-components";
import styleTools from "../../stylesTool";
import Card from "../../main_components/Card/Card";
import img from "../../media/img/site_light.jpg";

import Prologue from "../../main_components/Prologue/Prologue";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 8rem;
`;
const ImgTitleStyled = styled.img`
  margin-top: 5rem;
  margin-bottom: 4rem;
  padding-bottom: 4rem;
  box-shadow: ${styleTools.shadow.shadowB};
  width: 100%;
  object-fit: cover;
`;
const GridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Три колонки одинаковой ширины */
  grid-gap: 2rem; /* Промежуток между элементами */
  max-width: 1040px;
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
const Portfolio = () => {
  return (
    <>
      <ContainerStyled>
        <Prologue
          title={"portfolio."}
          textOne={"Проверьте некоторые из моих последних тематических исследований дизайна продукта."}
          textTwo={
            "Я работал в стартапах, агентствах, корпорациях и правительстве и руководил проектами для проектирования продуктов, используемых миллионами людей."
          }
        />
        <ImgTitleStyled src={img} alt="" />
        <GridStyled>
          <Card img={img} link={"hello"} title={"hello"} />
          <Card img={img} link={"hello"} title={"hello"} />
          <Card img={img} link={"hello"} title={"hello"} />
          <Card img={img} link={"hello"} title={"hello"} />
          <Card img={img} link={"hello"} title={"hello"} />
          <Card img={img} link={"hello"} title={"hello"} />
          <Card img={img} link={"hello"} title={"hello"} />
          <Card img={img} link={"hello"} title={"hello"} />
          <Card img={img} link={"hello"} title={"hello"} />
        </GridStyled>
      </ContainerStyled>
    </>
  );
};
export default Portfolio;
