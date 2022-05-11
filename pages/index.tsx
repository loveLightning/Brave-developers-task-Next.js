import { operators } from "../public/data/operators";
import Image from "next/image";
import {
  Operators,
  Operator,
  Input,
  InputInner,
  Container,
} from "../styles/styles";
import MainLayout from "../components/MainLayout";
import Head from "next/head";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { useRouter } from 'next/router'

const Index: React.FC = () => {
  const [value, setValue] = useState('')
  const [name, setName] = useState(operators)
  const router = useRouter()

  const filteredNameOperator = name.filter((item) => {
    return item.operator.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <MainLayout>
      <Head>
        <title>Главная</title>
        <meta name="keywords" content="Терминал оплаты мобильного телефона" />
        <meta name="description" content="Онлайн оплата вашего оператора" />
        <meta charSet="utf-8" />
      </Head>
      <Container>
        <Input>
          <InputInner value={value} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setValue(e.target.value)} placeholder="Введите оператора связи" type="search" />
        </Input>
        <Operators>
          {filteredNameOperator.map((item, idx) => {
            return (
              <Operator onClick={() => router.push(`operator/${item.id}`)} key={idx}>
                <Image
                  alt={item.operator}
                  src={item.img}
                  width="100px"
                  height="100px"
                  priority
                />
                <p>{item.operator}</p>
              </Operator>
            );
          })}
        </Operators>
      </Container>
    </MainLayout>
  );
};

export default Index;
