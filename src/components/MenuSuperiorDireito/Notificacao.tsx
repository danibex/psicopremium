import { IconX } from '@tabler/icons-react'
import Image from 'next/image'
import React, { useState } from 'react'

interface Notificacao {
    imagem_notificacao: string,
    titulo_notificacao: string,
    descricao_notificacao: string,
    data_notificacao: string,
    notificacoesVisualizadas?: boolean
}

export default function Notificacao(props: Notificacao) {
    const [mostrarNotificacao, setMostrarNotificacao] = useState(true)
return (
    <>
    <div className={`${mostrarNotificacao ? '' : 'hidden'} relative mx-0 py-[12px] px-[16px] hover:bg-[#EFEEF0]`}>
        <div className={`${props.notificacoesVisualizadas ? 'hidden' : ''} absolute w-[7.5px] h-[7.5px] bg-[#8C57FF] rounded-full top-3 right-3`}></div>
        <div className={`flex flex-row justify-center items-start`}>
            <button onClick={() => alert(`Notificação: ${props.titulo_notificacao}`)} className={`flex flex-row gap-4 w-[90%]`}>
                <Image className='rounded-full' width={40} height={40} alt='Foto de Notificação' src={props.imagem_notificacao}/>
                <div className={`flex flex-col text-left justify-start items-start gap-1 w-full tracking-tight`}>
                    <p className='font-bold text-sm'>{props.titulo_notificacao}</p>
                    <p className='text-[#807C8A] font-[500] text-[13px]'>{props.descricao_notificacao}</p>
                    <p className='text-[#B0ADB5] font-[500] text-[13px]'>{props.data_notificacao}</p>
                </div>
            </button>
            <button onClick={() => setMostrarNotificacao(!mostrarNotificacao)} className={`w-[10%] pt-4`}><IconX size={16}/></button>
        </div>
    </div>
    <hr className=''/>
    </> 
  )
}
