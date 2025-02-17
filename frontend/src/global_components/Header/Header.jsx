import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaVk, FaTelegram, FaWhatsapp, FaGithub } from "react-icons/fa";
import Logo from "../../main_components/Logo/Logo";
import LinkLight from "../../main_components/Links/LinkLight";
import styled from "styled-components";
import styleTools from "../../stylesTool";

import SidePanel from "./SidePanel";

const ContainerStyled = styled.div``;

const HeaderStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colorPanel);
  height: 4rem;
  transition: all, 1s;
  z-index: 50;
  @media (min-width: ${styleTools.size.md}) {
    height: 6rem;
    transition: all, 1s;
  }
`;
const MenuStyled = styled.div`
  height: 100%;
  width: 100%;
  margin-right: 1.25rem;
  margin-left: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
const LuckStyled = styled.div`
  cursor: pointer;
  margin-right: 2rem;
  @media (min-width: ${styleTools.size.md}) {
    display: none;
  }
`;
const NavStyled = styled.div`
  display: none;
  flex-direction: row;
  @media (min-width: ${styleTools.size.md}) {
    display: flex;
  }
`;
const NavIconsStyled = styled.div`
  display: none;
  flex-direction: row;
  justify-content: space-between;
  width: 10rem;
  margin-right: 2rem;
  margin-left: 2rem;
  @media (min-width: ${styleTools.size.md}) {
    display: flex;
  }
`;

const Header = () => {
  const menu = ["главная", "о нас", "наши работы", "фото", "контакты"];
  const [isMenu, setMenu] = useState(-24);

  const runMenu = () => {
    isMenu === 4 ? setMenu(-22) : setMenu(4);
  };

  return (
    <ContainerStyled>
      <SidePanel isMenu={isMenu} menu={menu} />
      <HeaderStyled>
        <Logo />
        <MenuStyled>
          <NavStyled>
            {menu.map((value, index) => {
              return <LinkLight key={index} link={value} />;
            })}
          </NavStyled>
          <NavIconsStyled>
            <FaGithub size={28} color="#ffffff" />
            <FaVk size={28} color="#ffffff" />
            <FaWhatsapp size={28} color="#ffffff" />
            <FaTelegram size={28} color="#ffffff" />
          </NavIconsStyled>
        </MenuStyled>

        <LuckStyled>
          <AiOutlineMenu onClick={runMenu} size={27} color="#ffffff" />
        </LuckStyled>
      </HeaderStyled>
    </ContainerStyled>
  );
};
export default Header;
