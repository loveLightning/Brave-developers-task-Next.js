import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 15px;
`;

export const Operators = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 650px) {
    display: grid;
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 330px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const Operator = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 8px 0px rgb(34 60 80 / 20%);
  padding: 30px;
  cursor: pointer;
  transition: 0.4s ease all;
  &:hover {
    transform: scale(1.1);
  }
  
  @media screen and (max-width: 400px) {
    & > span{
      width: 70px !important;
    }
  }

  @media screen and (max-width: 330px) {
    & > span{
      width: 50px !important;
    }
  }

`;

export const Input = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto 50px auto;
  max-width: 320px;
  height: 40px;
`;

export const InputInner = styled.input`
  width: 100%;
  padding-left: 10px;
  outline: none;
`;