import logo from "./ravencoin.png";
const Logo = () => {
  return <img className="invert w-10 h-10 cursor-pointer transition-all duration-300 hover:w-11 hover:h-11
                          tablet:w-16 tablet:h-16" src={logo} alt="" />;
};
export default Logo;
