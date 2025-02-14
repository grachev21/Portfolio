import { FaVk, FaTelegram, FaWhatsapp, FaGithub } from "react-icons/fa";
const NavIcons = () => {
  return (
    <main className="hidden tablet:flex">
      <FaGithub className="mx-2" size={28} color="#ffffff" />
      <FaVk className="mx-2" size={28} color="#ffffff" />
      <FaWhatsapp className="mx-2" size={28} color="#ffffff" />
      <FaTelegram className="mx-2" size={28} color="#ffffff" />
    </main>
  );
};
export default NavIcons;
