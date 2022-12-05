import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 15px;
`;

export const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Loader = styled.div`
  overflow: hidden;
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #65abf8;
  background: -moz-linear-gradient(
    left,
    #65abf8 10%,
    rgba(101, 171, 248, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    #65abf8 10%,
    rgba(101, 171, 248, 0) 42%
  );
  background: -o-linear-gradient(left, #65abf8 10%, rgba(101, 171, 248, 0) 42%);
  background: -ms-linear-gradient(
    left,
    #65abf8 10%,
    rgba(101, 171, 248, 0) 42%
  );
  background: linear-gradient(
    to right,
    #65abf8 10%,
    rgba(101, 171, 248, 0) 42%
  );
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  &::before {
    width: 50%;
    height: 50%;
    background: #65abf8;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }
  &::after {
    background: white;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @keyframes load3 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
