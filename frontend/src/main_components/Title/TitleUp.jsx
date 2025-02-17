import styled from "styled-components";
import styleTools from "../../stylesTool";

const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;
const TitleStyled = styled.div`
  color: ${styleTools.color.colorLinkDark};
  font-size: medium;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap; /* Предотвращает перенос текста */
`;
const LeftLineStyled = styled.div`
  width: 25vw;
  height: 1px;
  background-color: ${styleTools.color.colorLinkDark};
  margin-left: 3rem;
  margin-right: 3rem;
`;
const RightLineStyled = styled.div`
  width: 25vw;
  height: 1px;
  background-color: ${styleTools.color.colorLinkDark};
  margin-left: 3rem;
  margin-right: 3rem;
`;
const TitleUp = ({ content }) => {
  return (
    <ContainerStyled>
      <LeftLineStyled />
      <TitleStyled>{content}</TitleStyled>
      <RightLineStyled />
    </ContainerStyled>
  );
};
export default TitleUp;
