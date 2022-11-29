import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 40px 40px 0px 0px;
  padding: 34px 44px;
  margin-top: 20px;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: ${({ space }) => (space ? "" : "space-between")};
  align-items: center;
  gap: 17px;
`;

export const Box = styled.div`
  background: ${({ backend }) => (backend ? "#DBF6FD" : "#fee4cb")};
  border-radius: 25px;
  max-width: 288px;
  min-width: 230px;
  padding: 17px 22px;
  margin: 10px 0;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #6f6f6f;
  }
`;

export const Setting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #6f6f6f;
  }
`;

export const Slider = styled.div`
  h6 {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #242424;
  }

  h5 {
    width: 100%;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #242424;
    float: right;
  }
`;

export const SliderDiv = styled.div`
  width: 100%;
  height: 4.08px;
  background: #ffffff;
  border-radius: 27px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: right;
  float: right;
`;

export const SliderItem = styled.div`
  width: 175.04px;
  height: 4.08px;
  background: #ff942e;
  border-radius: 27px;
`;

export const BoxBottom = styled.div`
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #6f6f6f;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 20px;
`;
