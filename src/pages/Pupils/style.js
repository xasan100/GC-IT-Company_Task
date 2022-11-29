import styled from "styled-components";

export const PupilsBox = styled.div`
  display: grid;
  grid-template-columns: ${({ auto }) =>
    auto ? "auto auto auto" : "auto auto auto auto"};
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  padding: 30px 5px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 21px;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const Percent = styled.div`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.01em;
  color: #d0004b;
`;

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;
  padding: 30px 40px;
  margin-top: 20px;
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.div`
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.01em;
    color: #16c098;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px 40px;
  background: #b1b1b333;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  border: 1px solid transparent;

  color: #b5b7c0;

  :focus {
    border: 1px solid #5932ea;
  }
`;

export const Select = styled.select`
  padding: 10px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.01em;
  background: transparent;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Wrap = styled.div`
  margin-left: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: right;
  background: #b1b1b333;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  width: 180px;
  border-radius: 12px;

  p {
    position: absolute;
    left: 15px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.01em;
    color: #7e7e7e;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #b5b7c0;
`;

export const Trow = styled.tr`
  border-bottom: 1px solid #eeeeee;
`;
export const Tbody = styled.tbody`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #292d32;
`;

export const Tdata = styled.td`
  padding: 12px 0;
`;
