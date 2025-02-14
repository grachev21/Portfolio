import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaVk, FaTelegram, FaWhatsapp, FaGithub } from "react-icons/fa";
import Logo from "../../main_components/Logo/Loco";
import LinkLight from "../../main_components/Links/LinkLight";
import Nav from "./Nav";
import NavIcons from "./NavIcons";

const Header = () => {
  const menu = ["главная", "о нас", "наши работы", "фото", "контакты"];
  const [isMenu, setMenu] = useState(false);

  const runMenu = () => {
    isMenu ? setMenu(false) : setMenu(true);
  };
  console.log(isMenu);

  return (
    <main className="flex justify-center bg-colorPanel">
      {/* panel */}
      <ul
        className={`absolute flex flex-col items-center top-16 
                    overflow-y-auto transition-transform transform
                    ease-in-out duration-300 tablet:hidden
                    ${isMenu ? "" : "-translate-y-full"} w-full h-1/2`}>
        {menu.map((value, index) => {
          return (
            <li key={index} className="flex items-center justify-center bg-colorBackgroundButton border-b border-colorBorder w-full h-16">
              <LinkLight link={value} />
            </li>
          );
        })}
        {/* icons */}
        <li className="flex justify-center items-center w-full h-16 bg-colorBackgroundButton">
          <FaGithub className="mx-4" size={28} color="#ffffff" />
          <FaVk className="mx-4" size={28} color="#ffffff" />
          <FaWhatsapp className="mx-4" size={28} color="#ffffff" />
          <FaTelegram className="mx-4" size={28} color="#ffffff" />
        </li>
      </ul>

      {/* header */}
      <section className="absolute flex justify-center w-full h-16 tablet:h-24 bg-colorPanel z-50">
        <div className="h-full mx-5 w-full flex flex-row items-center laptop:w-[1040px] justify-between">
          <Logo />
          <Nav menu={menu} />
          <NavIcons />
          <AiOutlineMenu
            onClick={runMenu}
            className="transition-opacity duration-300 hover:opacity-75 cursor-pointer tablet:hidden"
            size={27}
            color="#ffffff"
          />
        </div>
      </section>
    </main>
  );
};
export default Header;
