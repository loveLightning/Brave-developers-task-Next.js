import React from 'react'
import { AnswerRequest, DescPay, ErrorPay, ImageIndicator, RepeatAttempt, SuccessPay, Title } from './styles'
import mark from "../../public/img/mark.svg";
import error from "../../public/img/error.svg";

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
                                <ImageIndicator src={mark} alt="success"></ImageIndicator>
                                <SuccessPay>Успешно оплачено</SuccessPay>
                                <DescPay>{`${descPay} ${watchPrice}`}</DescPay>
                            </AnswerRequest>

                        </>
                        :
                        <>
                            <AnswerRequest>
                                <ImageIndicator src={error} alt="error"></ImageIndicator>
                                <ErrorPay>Неудачная попытка</ErrorPay>
                            </AnswerRequest>
                            <RepeatAttempt onClick={sendData}>Повторить попытку</RepeatAttempt>
                        </>
                    }
                </>}
        </>
    )
}
