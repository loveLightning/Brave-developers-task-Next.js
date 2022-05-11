import styled from "styled-components";
import { Title, Container, BackHome } from "./styles";
import Link from 'next/link'

const Error = () => {
  return (
    <Container>
      <Title>Такой страницы не существует</Title>
      <Link href={'/'} passHref>
          <BackHome>Вернуться на главную</BackHome>
      </Link>
    </Container>
  );
};

export default Error;
