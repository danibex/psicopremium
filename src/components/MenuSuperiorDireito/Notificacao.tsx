import { IconX } from '@tabler/icons-react'
import React, { useState } from 'react'

export default function Notificacao() {
    const [mostrarNotificacao, setMostrarNotificacao] = useState(true)
return (
    <>
    <div className={`${mostrarNotificacao ? '' : 'hidden'} relative mx-0 py-[12px] px-[16px] hover:bg-[#EFEEF0]`}>
        <div className={`absolute w-[7.5px] h-[7.5px] bg-[#8C57FF] rounded-full top-3 right-3`}></div>
        <div className={`flex flex-row justify-center items-start`}>
            <button onClick={() => alert('Mostrando Notificação')} className={`flex flex-row gap-4 w-[90%]`}>
                <p>Foto</p>
                <div className={`flex flex-col justify- items-start gap-1 w-full`}>
                    <p>Nome</p>
                    <p>Notificação</p>
                    <p>Data</p>
                </div>
            </button>
            <button onClick={() => alert('Apagando Notificação')} className={`w-[10%] pt-4`}><IconX size={16}/></button>
        </div>
    </div>
    <hr className=''/>
    </> 
  )
}
