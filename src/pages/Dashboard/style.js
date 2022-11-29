import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

export const Left = styled.div`
  flex: 4;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  padding: 10px;

  h1 {
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: -0.01em;
    color: #000000;
    padding: 10px 20px;
  }
`;

export const Right = styled.div`
  flex: 3;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  padding: 20px;
`;

export const  Container = styled.div`
padding: 0px 50px  ;
`
export const Hero = styled.div`
display: flex ; 
width: 100% ;
background-color: red ;

`