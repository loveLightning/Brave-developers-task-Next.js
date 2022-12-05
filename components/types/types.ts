import mts from '../../public/img/mts.jpg'
import megafon from '../../public/img/megafon.png'
import beeline from '../../public/img/beeline.jpg'
import { StaticImageData } from 'next/image'

export interface OperatorsTypes {
    id: number
    operator: string
    img: string | StaticImageData
}

export const operators: OperatorsTypes[] = [
    {
        id: 1,
        operator: 'МТС',
        img: mts,
    },
    {
        id: 2,
        operator: 'Мегафон',
        img: megafon,
    },
    {
        id: 3,
        operator: 'Билайн',
        img: beeline,
    },
    
]
