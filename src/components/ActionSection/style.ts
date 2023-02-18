import styled from "styled-components";

export const Input = styled.input`
  height: 45px;
  width: 391px;
  left: 24px;
  top: 165px;
  border-radius: 10px;
  border: 1px solid rgba(254, 206, 0, 1);
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const Day = styled.select`
  border: 1px solid rgba(254, 206, 0, 1);
  color: rgba(0, 0, 0, 0.7);
  height: 45px;
  width: 240px;
  border-radius: 10px;
  font-family: Mulish;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const Hour = styled.select`
  border: 1px solid rgba(254, 206, 0, 1);
  height: 45px;
  width: 120px;
  border-radius: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const Add = styled.button`
  background: rgba(0, 186, 136, 1);
  height: 44px;
  width: 200px;
  border-radius: 10px;
  padding: 10px 12px 10px 12px;
  cursor: pointer;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  align-items: center;
  color: #ffffff;
  border: 0;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const Delete = styled.button`
  background: rgba(255, 61, 31, 1);
  height: 44px;
  width: 200px;
  border: 0;
  border-radius: 10px;
  padding: 10px 12px 10px 12px;
  cursor: pointer;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #ffffff;
  justify-content: flex-end;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;
