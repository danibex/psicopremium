import React from 'react'
import { IconChartPie2, IconDeviceLaptop, IconUsers } from '@tabler/icons-react';
import IconeTransacoes from './IconeTransacoes';
export default function CardTransacoes() {
  return (
    <div className={`flex flex-col justify-between items-start bg-white shadow-xl rounded-md  h-[176px] p-4`}>
        <div className={`flex flex-col justify-start items-start`}>
            <p className={`text-xl font-semibold tracking-tight`}>Transações</p>
            <div className='whitespace-nowrap flex flex-row text-[15px] text-[#2b263de6] '>
            <p className={`font-[600]`}>Total de 48,9% de crescimento</p><p className={``}> 😎 nesse mês!</p>
            </div>
        </div>
        <div className={`flex flex-row justify-between items-center w-full`}>
          <IconeTransacoes className='bg-[#8C57FF]' icone={<IconChartPie2 color={'#ffffff'}/>} nome='Vendas' numero={245}/>
          <IconeTransacoes className='bg-[#07bc0c]' icone={<IconUsers color={'#ffffff'}/>} nome='Usuários' numero={124}/>  
          <IconeTransacoes className='bg-[#FFB400]' icone={<IconDeviceLaptop color={'#ffffff'}/>} nome='Sessões' numero={593}/>             
        </div>
    </div>
  )
}
