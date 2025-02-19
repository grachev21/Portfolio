import styled from "styled-components";
import styleTools from "../../stylesTool";
const ContainerStyled = styled.div``;

const TitleStyled = styled.div`
  font-size: 5rem;
  font-weight: 700;
  color: ${styleTools.color.colorTitle};
  margin-left: 2rem;
  margin-right: 2rem;
`;
const TextLightStyled = styled.div`
  margin-top: 2rem;
  color: ${styleTools.color.colorLinkDarkLight};
  font-size: 1.6rem;
  font-weight: lighter;
  margin-left: 2rem;
  margin-right: 2rem;
`;
const TextDarkStyled = styled.div`
  margin-top: 2rem;
  color: ${styleTools.color.colorLinkDark};
  font-size: 1.2rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const Prologue = ({ title, textOne, textTwo }) => {
  return (
    <ContainerStyled>
      <TitleStyled>{title}</TitleStyled>
      <TextLightStyled>{textOne}</TextLightStyled>
      <TextDarkStyled>{textTwo}</TextDarkStyled>
    </ContainerStyled>
  );
};
export default Prologue;
