import React from 'react'
import { operators, OperatorsTypes } from '../types';
import Image from "next/image";
import {
  Operators,
  Operator,
  Input,
  InputInner,
  Container,
} from "./styles";
import { SetStateAction, useState, useMemo } from "react";
import { useRouter } from 'next/router'

export const Home = () => {
    const [value, setValue] = useState('')
    const [name, setName] = useState(operators)
    const router = useRouter()
  
    const filteredNameOperator = useMemo(() => {
      return name.filter((item) => item.operator.toLowerCase().includes(value.toLowerCase()))
    }, [name, value])
  
  return (
    <Container>
      <Input>
        <InputInner value={value} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setValue(e.target.value)} placeholder="Введите оператора связи" type="search" />
      </Input>
      <Operators>
        {filteredNameOperator.map((item: OperatorsTypes, idx: number) => {
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
  )
}
