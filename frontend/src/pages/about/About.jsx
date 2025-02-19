import styled from "styled-components";
import Prologue from "../../main_components/Prologue/Prologue";
import img_1 from "../../media/img/20230402_170435.jpg";
import img_2 from "../../media/img/20230610_092416.jpg";
import img_3 from "../../media/img/20231001_140332.jpg";
import img_4 from "../../media/img/20240417_141945.jpg";
import img_5 from "../../media/img/20240420_131834.jpg";
import img_6 from "../../media/img/20230610_094116.jpg";
import styleTools from "../../stylesTool";

const data = {
  title: "about.",
  textOne: "Являюсь опытным фулстек-разработчиком, Базируюсь в Самаре",
  textTwo: `Я — опытный фулстэк-разработчик с глубокими знаниями 
    в области создания современных веб-приложений. Моя экспертиза охватывает 
    как фронтенд, так и бэкенд разработку, что позволяет мне создавать 
    полноценные решения от идеи до реализации.`,
};
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleBockStyled = styled.div`
  border-radius: 12px;
  box-shadow: ${styleTools.shadow.shadowA};
  padding: 1rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-right: 2rem;
  margin-left: 2rem;
`;
const TitleImgStyled = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 12px;
`;

const GridStyled = styled.div`
  margin-right: 2rem;
  margin-left: 2rem;
  padding-bottom: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Три колонки одинаковой ширины */
  grid-gap: 2rem; /* Промежуток между элементами */
  max-width: 1040px;
  @media (min-width: ${styleTools.size.sm}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Три колонки одинаковой ширины */
    grid-gap: 2rem; /* Промежуток между элементами */
  }
  @media (min-width: ${styleTools.size.md}) {
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* Три колонки одинаковой ширины */
    grid-gap: 2rem; /* Промежуток между элементами */
  }
`;
const ImgBlockStyled = styled.div`
  padding: 1rem;
  box-shadow: ${styleTools.shadow.shadowA};
  border-radius: 12px;
`;
const ImgStyled = styled.img`
  min-width: 140px;
  min-height: 90px;
  max-width: 160px;
  max-height: 110px;
  object-fit: cover;
  border-radius: 12px;
`;

const About = () => {
  return (
    <ContainerStyled>
      <Prologue title={data.title} textOne={data.textOne} textTwo={data.textTwo} />
      <TitleBockStyled>
        <TitleImgStyled src={img_1} alt="" />
      </TitleBockStyled>
      <GridStyled>
        <ImgBlockStyled>
          <ImgStyled src={img_2} alt="" />
        </ImgBlockStyled>
        <ImgBlockStyled>
          <ImgStyled src={img_3} alt="" />
        </ImgBlockStyled>
        <ImgBlockStyled>
          <ImgStyled src={img_4} alt="" />
        </ImgBlockStyled>
        <ImgBlockStyled>
          <ImgStyled src={img_5} alt="" />
        </ImgBlockStyled>
        <ImgBlockStyled>
          <ImgStyled src={img_6} alt="" />
        </ImgBlockStyled>
        <ImgBlockStyled>
          <ImgStyled src={img_1} alt="" />
        </ImgBlockStyled>
      </GridStyled>
    </ContainerStyled>
  );
};
export default About;
