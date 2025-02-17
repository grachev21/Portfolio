import styled from "styled-components";
import styleTools from "../../stylesTool";

const Container = styled.div`
  color: ${styleTools.color.colorLinkDark};
  margin: 1rem;
`;

const LinkDark = ({ content }) => {
  return <Container>{content}</Container>;
};
export default LinkDark;
