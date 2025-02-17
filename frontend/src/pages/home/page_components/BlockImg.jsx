import coder from "../img/a20cd03f-cbb7-46e3-91cc-6f2de27e025f.jpg";
import styled from "styled-components";
import styleTools from "../../../stylesTool";

const ContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 62vw;
  box-shadow: ${styleTools.shadow.shadowB};
`;
const BlockTextStyled = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  z-index: 10;
`;
const SpanLeftStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 2rem;
`;
const SpanRightStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  margin-right: 2rem;
`;

const TitleStyled = styled.div`
  color: ${styleTools.color.colorLinkLight};
  font-size: 7vw;
  font-weight: bold;
`;

const TextLeftStyled = styled.div`
  margin-top: 1rem;
  color: ${styleTools.color.colorLinkLight};
  font-size: large;
  text-align: left;
  width: 28vw;
  display: none;
  @media (min-width: ${styleTools.size.md}) {
    display: block;
  }
`;

const TextRightStyled = styled.div`
  margin-top: 1rem;
  color: ${styleTools.color.colorLinkLight};
  font-size: large;
  text-align: right;
  width: 24vw;
  display: none;
  @media (min-width: ${styleTools.size.md}) {
    display: block;
  }
`;

const ImgStyled = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top 0px;
`;

const BlockImg = () => {
  return (
    <ContainerStyled>
      <BlockTextStyled>
        <SpanLeftStyled>
          <TitleStyled>backend</TitleStyled>
          <TextLeftStyled>Здесь что где и как и почему будет какойто умный текст про бэкенд</TextLeftStyled>
        </SpanLeftStyled>
        <SpanRightStyled>
          <TitleStyled>frontend</TitleStyled>
          <TextRightStyled>Здесь будет какойто умный текст про фронтенд и много другой якобы полезной информации</TextRightStyled>
        </SpanRightStyled>
      </BlockTextStyled>
      <ImgStyled src={coder} alt="" />
    </ContainerStyled>
  );
};
export default BlockImg;
