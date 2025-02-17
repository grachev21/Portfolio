import logo from "./ravencoin.png";
import styleTools from "../../stylesTool";
import styled from "styled-components";

const LogoStyled = styled.img`
  filter: invert();
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  transition: all 1s;
  margin-left: 2rem;

  @media (min-width: ${styleTools.size.md}) {
    height: 4rem;
    width: 4rem;
  }
`;

const Logo = () => {
  return <LogoStyled src={logo} alt="" />;
};
export default Logo;
