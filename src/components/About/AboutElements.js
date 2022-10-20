import styled from "styled-components";
import about from "../../assets/about.jpg";

export const BannerContainer = styled.div`
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: 0%;
  background-image: url(${about});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BannerTitle = styled.h2`
  color: #000;
`;

export const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin: 5%;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const FeatureChild = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;

export const Tabs = styled.div`
  .tab-head {
    border: #080808 solid 1px;
    padding: 10px 50px;
    margin: 15px;
    font-size: 16px;
    font-weight: 700;
    line-height: 50px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #080808;
    }
  }

  .active {
    color: #fff;
    background-color: #080808;
  }
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TabContainer = styled.div`
  margin: 15px;
`;
