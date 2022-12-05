import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 15px;
`;

export const Pay = styled.div`
  max-width: 1100px;
  height: 550px;
  box-shadow: 1px 2px 15px 7px rgba(34, 60, 80, 0.1);
  padding: 50px;
  background: white;
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 650px) {
    height: 538px;
    padding: 40px 20px;
    border-radius: 5px;
  }
`;

export const ImageWrapper = styled.div`
  @media screen and (max-width: 650px) {
    position: absolute;
    top: 101px;
    left: 50%;
    transform: translateX(-50%);
    & > span {
      width: 70px !important;
      height: 70px !important;
    }
  }
`

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-top: 0;
  margin-bottom: 50px;
  @media screen and (max-width: 350px) {
    font-size: 30px;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 200px;
  margin: 0 auto;
  @media screen and (max-width: 650px) {
    margin-top: 130px;
  }
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const InputBlock = styled.div`
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormError = styled.p`
  position: absolute;
  color: red;
  margin: 0;
  font-size: 12px;
  bottom: -17px;
  white-space: nowrap;
`;

export const InputSubmit = styled.button`
  width: 100%;
  height: 35px;
  background: grey;
  outline: none;
  border: none;
  color: white;
  letter-spacing: 0.1em;
  margin-top: 10px;
  cursor: pointer;
  background: green;
  &:disabled {
    background-color: gray;
    color: lightgray;
    cursor: auto;
  }
`;
export const PayBottom = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
  @media screen and (max-width: 650px) {
    justify-content: center;
  }
`;

export const BackHome = styled.div`
  margin-top: 50px;
`;

export const AnswerRequest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const LinkHomeAnim = styled.a`
  cursor: pointer;
  position: relative;
  white-space: nowrap;

  &:hover {
    color: darkblue;
  }

  &::before {
    content: "";
    width: 0;
    height: 1px;
    background: darkblue;
    position: absolute;
    bottom: -2px;
    transition: 0.4s ease all;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::before {
    content: "";
    width: 100%;
  }
`;

export const RepeatAttempt = styled.p`
  cursor: pointer;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  white-space: nowrap;
  border: 1px solid #176cd4;
  padding: 10px;
  background: #176cd4;
  color: white;
  transition: 0.4s ease all;
  &:hover {
    background: blue;
  }

`
export const SuccessPay = styled.p`
  color: green;
  white-space: nowrap;
`

export const ErrorPay = styled.p`
  color: red;
  white-space: nowrap;
`
export const BackHomeError = styled.a`
  top: 85%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: darkblue;
  }

  &::before {
    content: "";
    width: 0;
    height: 1px;
    background: darkblue;
    position: absolute;
    bottom: -2px;
    transition: 0.4s ease all;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover::before {
    content: "";
    width: 100%;
  }
`

export const DescPay = styled.p`
  font-size: 16px;
`