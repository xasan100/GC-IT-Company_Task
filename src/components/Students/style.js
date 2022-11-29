import { Table } from "antd";
import styled from "styled-components";

export const AntTable = styled(Table)`
margin: 0 auto ;

`
export const Hero = styled.div`
width  : 950px ;
max-width: 950px ;
height: 20vh ;
margin: 0 auto ;
display: flex ; 
justify-content: space-between ;
align-items : center  ;
margin: 30px auto ;
background-color: white ;
border-radius: 12px ;
padding: 0px 10px ;
` 
export const Container = styled.div`
width: 100% ;
margin: 0px auto ;
display: flex; 
justify-content: center ;
flex-direction: column;
background-color: #F1F3F2;
height: 100% ;
box-sizing: border-box ;

`
const User = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  margin-left: ${({ flex }) => flex && "16px"};
`;

User.Img = styled.img`
  width: 113px;
  height: 113px;
`;

export const InputBox = styled.div`
    display: flex ;
    justify-content: end;
    margin-right: 30px ;

    >input{
      border:  none;
      border-radius: 10px;
      width: 269.55px;
      height: 38px;
      font-size: 18px ;
      background: #F9FBFF65;
      border: 1px solid blue ;
      padding: 10px 10px ;

    }
    >select{
      border: none ;
      background: #F9FBFF;
      border-radius: 10px;
      background: #F9FBFF65;
      border: 1px solid blue ;


    }
    gap:0px 20px ;
`
export const Box = styled.div`
width : 950px;
max-width: 950px;
border: 10% ;
margin: 0 auto ;
background-color: white ;
>h3{
 font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 33px;
margin: 30px ;

letter-spacing: -0.01em;

color: #000000;
}
>p{
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */
letter-spacing: -0.01em;
color: #16C098;
margin: 30px ;
}
`


export const HeroChilid = styled.div`
display: flex ;
align-items: center ;
gap: 0px 20px ;
`

export const TextBox = styled.div`
>p{
 font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
letter-spacing: -0.01em;

color: #ACACAC; 
}
`
export const NAV = styled.div`
display: flex ;
justify-content: space-between ;
margin: 0 auto;
width: 950px;
align-items: center ;
`
export const AddBox = styled.div`
display: flex ; 
align-items :  center;
gap: 0px 20px;
>input {
  border: none ;
  padding: 0px 10px ;
  height:40px ;
border-radius: 10px ;
}
`
export default { AntTable, User }