import styled from "styled-components";
import styleTools from "../../stylesTool";
import { GrLinkTop } from "react-icons/gr";
import LinkDark from "../../main_components/Links/LinkDark";

const ContainerStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 6rem;
  background-color: ${styleTools.color.colorBackgroundDark};
  z-index: 100;
  box-shadow: ${styleTools.shadow.shadowB} inset;
  @media (min-width: ${styleTools.size.md}) {
    justify-content: space-between;
  }
`;
const RoundStyled = styled.div`
  position: absolute;
  z-index: 30;
  background-color: ${styleTools.color.colorBackgroundDark};
  box-shadow: ${styleTools.shadow.shadowB} inset;
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;
  width: 8rem;
  height: 4rem;
  top: -64px;
  left: 50%;
  transform: translate(-50%);
`;
const BackRoundStyled = styled.div`
  position: absolute;
  top: 64px;
  background-color: ${styleTools.color.colorBackgroundDark};
  width: 8rem;
  height: 2rem;
`;
const BlockStyled = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;
  background-color: blue;
`;

const NameStyled = styled.div`
  display: flex;
  align-items: center;
  z-index: 50;
`;
const BlockLinkStyled = styled.div`
  display: none;
  z-index: 50;
  @media (min-width: ${styleTools.size.md}) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const TopIconStyled = styled.div`
  position: absolute;
  transform: translate(-50%);
  top: 50%;
  left: 50%;
  cursor: pointer;
`;

const Footer = () => {
  const runTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <ContainerStyled>
      <RoundStyled>
        <BackRoundStyled />
        <TopIconStyled onClick={runTop}>
          <GrLinkTop color={styleTools.color.colorText} size={28} />
        </TopIconStyled>
      </RoundStyled>
      <BlockStyled />
      <NameStyled>
        <LinkDark content={"@ 2025 Grachev Denis"} />
      </NameStyled>
      <BlockLinkStyled>
        <LinkDark content={"Главная"} />
        <LinkDark content={"О нас"} />
        <LinkDark content={"Наши работы"} />
        <LinkDark content={"Фото"} />
        <LinkDark content={"Контакты"} />
      </BlockLinkStyled>
    </ContainerStyled>
  );
};
export default Footer;
