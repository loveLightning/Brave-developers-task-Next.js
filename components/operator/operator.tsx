import { MainLayout } from "../layout/main-layout";
import Link from "next/link";
import {
  Pay,
  Container,
  Form,
  FormBlock,
  InputSubmit,
  BackHome,
  PayBottom,
  InputBlock,
  FormError,
  LinkHomeAnim,
  ImageWrapper,
} from "./styles";
import { Loader, Loading } from '../styles'

import { useRouter } from "next/router";
import { operators } from "../types/types";
import Head from "next/head";
import Image from "next/image";
import React, { useCallback, useState } from "react";

import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { PaymentAttempt } from "./payment-attempt";

interface InputsTypes {
  tel: string;
  number: string;
};

export const Operator = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [dataSuccess, setDataSuccess] = useState(false);
  const [form, setForm] = useState(true);

  const {
    setValue,
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch
  } = useForm<InputsTypes>({
    mode: 'onChange',
  });
  const watchPrice = watch('number');

  const divide = (random: number) => {
    if (random === 0) {
      throw new Error('Неудачная попытка');
    }
  }

  const sendData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1");
      setForm(false)
      const randomAnswerServer = [true, false];
      const random = Math.floor(Math.random() * randomAnswerServer.length);
      divide(random);
      setDataSuccess(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const price = e.target.value;

    if (+price <= 1000 && +price >= 0) {
      setValue('number', price, { shouldValidate: true })
    } else {
      e.preventDefault()
    }
  }

  return (
    <>
      <Head>
        <title>{operators[Number(id) - 1]?.operator}</title>
      </Head>
      <Container>
        <Pay>
          {loading ? <Loading><Loader /></Loading> : <><PaymentAttempt watchPrice={watchPrice} form={form} sendData={sendData} dataSuccess={dataSuccess} />

            {form && <Form className="form" onSubmit={handleSubmit(sendData)}>
              <FormBlock>
                <InputBlock>
                  <label htmlFor="phone">Номер телефона</label>
                  <Controller
                    control={control}
                    name="tel"
                    defaultValue=""
                    render={({
                      field: { onChange, value },
                    }) => (
                      <InputMask
                        max={1000}
                        min={1}
                        mask="+7 999 99 99 999"
                        placeholder="Введите номер"
                        maskChar={null}
                        onChange={onChange}
                        value={value}
                      ></InputMask>
                    )}
                  />
                  {errors?.tel && (
                    <FormError>
                      {errors?.tel.message || "Неккоректный номер телефона"}
                    </FormError>
                  )}
                </InputBlock>
                <InputBlock>
                  <label htmlFor="number">Сумма</label>
                  <Controller
                    control={control}
                    name="number"
                    rules={{
                      required: "Введите сумму",
                      maxLength: 4,
                      minLength: 1,
                      max: 1000,
                      min: 1
                    }}
                    defaultValue=""
                    render={({
                      field: { value },
                    }) => (
                      <InputMask
                        mask="9999"
                        placeholder="Введите сумму"
                        maskChar={null}
                        onChange={(e) => changeNumber(e)}
                        value={value}
                      ></InputMask>
                    )}
                  />
                  {errors?.number && (
                    <FormError>
                      {errors?.number.message || "В пределах от 1 до 1000 руб."}
                    </FormError>
                  )}
                </InputBlock>
              </FormBlock>
              <InputSubmit type="submit" disabled={!isValid}>Оплатить</InputSubmit>
            </Form>}

            <PayBottom>
              <BackHome>
                <Link href={"/"} passHref>
                  <LinkHomeAnim>Вернуться на главную</LinkHomeAnim>
                </Link>
              </BackHome>
              {operators[Number(id) - 1]?.img && <ImageWrapper>
                <Image
                  src={operators[Number(id) - 1]?.img}
                  priority
                  width="100px"
                  height="100px"
                  alt="operator"
                ></Image>
              </ImageWrapper>}
            </PayBottom> </>}

        </Pay>
      </Container>
    </>
  );
}
