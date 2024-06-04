import Image from 'next/image'
import React from 'react'

export default function CardSessoes() {
  return (
    <div className={`flex flex-row bg-white shadow-xl rounded-md w-[243px] h-[176px]`}>
        <div className={`flex flex-col justify-between items-start p-4`}>
        <p className={`text-xl font-semibold tracking-tight`}>Sessões</p>
        <p className={`text-[24px] font-bold text-[#2b263de6] `}>32</p>
        <div className='flex flex-col justify-start gap-2'>
            <p className={`text-green-500`}>+15%</p>
            <p className={`text-[13px] font-[500] tracking-wide py-[2px] px-[12px] rounded-r-full rounded-l-full bg-[#EFEEF0]`}>Última Semana</p>
        </div>
        </div>
        <Image width={86.5} height={176} alt='Personagem em pé com copo na mão' src={'/images/personagem-em-pe-com-copo-na-mao.png'}/>
    </div>
  )
}
