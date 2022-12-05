import styled from 'styled-components'
import Link from 'next/link'

export const Error = () => {
  return (
    <Container>
      <Title>Такой страницы не существует</Title>
      <Link href={'/'} passHref>
        <BackHome>Вернуться на главную</BackHome>
      </Link>
    </Container>
  );
};


export const Title = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 15px;
`;

export const BackHome = styled.a`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;