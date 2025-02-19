import { NavLink } from "react-router-dom";
import styled from "styled-components";
import styleTools from "../../stylesTool";

const ContainerStyld = styled.div`
  color: var(--colorLinkLight);
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
  cursor: pointer;
  transition: all, 1s;
  @media (min-width: ${styleTools.size.md}) {
    font-size: 1rem;
    margin-left: 1.2rem;
  }
  @media (min-width: ${styleTools.size.lg}) {
    font-size: 1.2rem;
    font-weight: normal;
  }
`;

const LinkLight = ({ name, link }) => {
  return (
    <NavLink to={link}>
      <ContainerStyld>{name}</ContainerStyld>
    </NavLink>
  );
};
export default LinkLight;
