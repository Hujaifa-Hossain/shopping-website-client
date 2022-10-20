import styled from "styled-components";
import contact from '../../assets/contact.jpg';

export const BannerContainer = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-image: url(${contact});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BannerTitle = styled.h2`
  color: #000;
`;