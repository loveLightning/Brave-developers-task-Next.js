import MainLayout from "../../components/MainLayout";
import Link from "next/link";
import {
  Pay,
  Container,
  Title,
  Form,
  FormBlock,
  InputSubmit,
  BackHome,
  PayBottom,
  Loading,
  AnswerRequest,
  Loader,
  BackHomesecond,
  InputBlock,
  FormError,
  LinkHomeAnim,
  RepeatAttempt,
  SuccessPay,
  ErrorPay,
  ImageWrapper,
  BackHomeError
} from "./styles";
import { useRouter } from "next/router";
import { operators } from "../../public/data/operators";
import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from "react";
import mark from "../../public/img/mark.svg";
import error from "../../public/img/error.svg";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputMask from "react-input-mask";

export async function getServerSideProps({ params }: any) {
  return {
    props: {},
  };
}

const Operator: React.FC = () => {
  const router = Number(useRouter().query.id);
  const form: any = useRef();
  const backHome: any = useRef();
  const [loading, setLoading] = useState(false);
  const [dataSuccess, setDataSuccess] = useState(false);
  const [dataError, setDataError] = useState(false);
  const [home, setHome] = useState(false);
  const [repeatAttempt, setRepeatAttempt] = useState(false)
  const [backHomeError, setBackHomeError] = useState(false)
  
  type Inputs = {
    tel: string;
    number: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  const divide = (random: number) => {
    if (random == 0) {
      throw new Error('Неудачная попытка')
    }
  }

  const sendData = async (data: any) => {
    setLoading(true);
    form.current.style.display = "none";
    backHome.current.style.display = "none";
    const randomAnswerServer = [true, false]
    const random = Math.floor(Math.random() * randomAnswerServer.length)
    setDataError(false);
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1");
    
    try {
      divide(random)
      const data = await response.json();
      setLoading(false);
      setDataSuccess(true);
      setHome(true);
      setDataError(false);
      setRepeatAttempt(false);
      setBackHomeError(false)
    } catch (error) {
      setDataError(true);
      setLoading(false);
      setRepeatAttempt(true);
      setBackHomeError(true)
      console.log(error)
    }
  };

  return (
    <MainLayout>
      <Head>
        <title>{operators[router - 1].operator}</title>
      </Head>
      <Container>
        <Pay>
          <Title>Форма оплаты</Title>
          <Loading>{loading && <Loader></Loader>}</Loading>
          <AnswerRequest>
            {dataSuccess && (
              <>
              <Image src={mark} width="100px" height="100px" alt="success"></Image>
              <SuccessPay>Успешно оплачено</SuccessPay>
              </>
            )}
          </AnswerRequest>
          <AnswerRequest>
            {dataError && (
              <>
                <Image src={error} width="100px" height="100px" alt="error"></Image>
                <ErrorPay>Неудачная попытка</ErrorPay>
              </>
            )}
          </AnswerRequest>
          {repeatAttempt && (<RepeatAttempt onClick={sendData}>Повторить попытку</RepeatAttempt>)}
          {backHomeError && (<Link href={'/'} passHref><BackHomeError>Вернуться на главную</BackHomeError></Link>)}
          {home && (
            <BackHomesecond>
              <Link href={"/"} passHref>
                <LinkHomeAnim>Вернуться на главную</LinkHomeAnim>
              </Link>
            </BackHomesecond>
          )}
          <Form className="form" ref={form} onSubmit={handleSubmit(sendData)}>
            <FormBlock>
              <InputBlock>
                <label htmlFor="phone">Номер телефона</label>
                <Controller
                  control={control}
                  name="tel"
                  defaultValue=""
                  rules={{
                    required: "Введите номер телефона",
                    maxLength: 16,
                    minLength: 16,
                  }}
                  render={({
                    field: { onChange, onBlur, ref, value },
                  }) => (
                    <InputMask
                      mask="+7 999 99 99 999"
                      placeholder="Введите номер"
                      maskChar={null}
                      onBlur={onBlur}
                      onChange={onChange}
                      inputRef={ref}
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
                  defaultValue=""
                  rules={{
                    required: "Введите сумму",
                    maxLength: 4,
                    minLength: 1,
                    max: 1000,
                    min: 1
                  }}
                  render={({
                    field: { onChange, onBlur, ref, value },
                  }) => (
                    <InputMask
                      mask="9999"
                      placeholder="Введите сумму"
                      maskChar={null}
                      onBlur={onBlur}
                      onChange={onChange}
                      inputRef={ref}
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
          </Form>
          <PayBottom ref={backHome}>
            <BackHome>
              <Link href={"/"} passHref>
                <LinkHomeAnim>Вернуться на главную</LinkHomeAnim>
              </Link>
            </BackHome>
            <ImageWrapper>
              <Image
                src={operators[router - 1].img}
                priority
                width="100px"
                height="100px"
                alt="operator"
              ></Image>
            </ImageWrapper>
          </PayBottom>
        </Pay>
      </Container>
    </MainLayout>
  );
};

export default Operator;
