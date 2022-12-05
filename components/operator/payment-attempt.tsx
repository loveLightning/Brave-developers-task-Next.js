import React from 'react'
import { AnswerRequest, DescPay, ErrorPay, RepeatAttempt, SuccessPay, Title } from './styles'
import mark from "../../public/img/mark.svg";
import error from "../../public/img/error.svg";
import Image from 'next/image'

interface Props {
    form: boolean
    dataSuccess: boolean
    sendData: () => void
    watchPrice: number | string
}

export const PaymentAttempt = ({ form, dataSuccess, sendData, watchPrice }: Props) => {
    const descPay = 'Вы оплатили';

    return (
        <>
            <Title>Форма оплаты</Title>
            {!form &&
                <>

                    {dataSuccess ?
                        <>
                            <AnswerRequest>
                                <Image src={mark} width="100px" height="100px" alt="success"></Image>
                                <SuccessPay>Успешно оплачено</SuccessPay>
                                <DescPay>{`${descPay} ${watchPrice}`}</DescPay>
                            </AnswerRequest>

                        </>
                        :
                        <>
                            <AnswerRequest>
                                <Image src={error} width="100px" height="100px" alt="error"></Image>
                                <ErrorPay>Неудачная попытка</ErrorPay>
                            </AnswerRequest>
                            <RepeatAttempt onClick={sendData}>Повторить попытку</RepeatAttempt>
                        </>
                    }
                </>}
        </>
    )
}
