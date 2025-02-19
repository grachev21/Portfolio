import styled from "styled-components";
import styleTools from "../../stylesTool";

const Container = styled.div`
  background-color: ${styleTools.color.colorBgCard};
  box-shadow: ${styleTools.shadow.shadowA};
  border-radius: 15px;
  padding: 1.2rem;
  max-width: 330px;
`;
const Img = styled.img`
  border-radius: 10px;
`;
const Title = styled.div`
  margin-top: 2rem;
  font-size: medium;
  color: ${styleTools.color.colorText};
`;
const Link = styled.div`
  margin-top: .6rem;
  color: ${styleTools.color.colorLinkDark};
`;

const Card = ({ img, title, link }) => {
  return (
    <Container>
      <Img src={img} alt="" />
      <Title>{title}</Title>
      <Link>{link}</Link>
    </Container>
  );
};
export default Card;
