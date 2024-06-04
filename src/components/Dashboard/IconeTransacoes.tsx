import React from 'react'
interface IconeTransacoes {
    nome: string,
    numero: number,
    icone: any,
    className: string
}
export default function IconeTransacoes(props: IconeTransacoes) {
  return (
    <div className={`flex flex-row gap-2 justify-center items-center`}>
        <div className={`flex justify-center items-center ${props.className} rounded-lg w-[40px] h-[40px]`}>
            {props.icone}
        </div>
        <div className={`flex flex-col justify-start`}>
            <p className='tracking-tighter text-sm'>{props.nome}</p>
            <p className='font-semibold text-base'>{props.numero}</p>
        </div>
    </div>
  )
}
