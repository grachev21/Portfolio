import { FaVk, FaTelegram, FaWhatsapp, FaGithub } from "react-icons/fa";
import styled from "styled-components";
import styleTools from "../../stylesTool";

import LinkLight from "../../main_components/Links/LinkLight";

const SidePanelStyled = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: all 1s;
  top: ${(props) => props.$top}rem;
  z-index: 20;
  @media (min-width: ${styleTools.size.md}) {
    display: none;
  }
`;
const ButtonStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--colorBackgroundButton);
  border-bottom: 1px solid var(--colorBorder);
  width: 100%;
  height: 4rem;
`;
const IconsStyled = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: var(--colorBackgroundButton);
`;
const SidePanel = ({ isMenu, menu }) => {
  return (
    <SidePanelStyled $top={isMenu}>
      {menu.map((value, index) => {
        return (
          <ButtonStyled key={index}>
            <LinkLight name={value.name} link={value.link} />
          </ButtonStyled>
        );
      })}
      <IconsStyled>
        <FaGithub size={28} color="#ffffff" />
        <FaVk size={28} color="#ffffff" />
        <FaWhatsapp size={28} color="#ffffff" />
        <FaTelegram size={28} color="#ffffff" />
      </IconsStyled>
    </SidePanelStyled>
  );
};
export default SidePanel;
