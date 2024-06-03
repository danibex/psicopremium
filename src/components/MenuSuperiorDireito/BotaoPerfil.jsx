import React, { useState } from 'react'
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function BotaoPerfil({alternarVisualizacao, opcao}) {
    const router = useRouter()
    const {psicologo, usuario, opcao_menu} = router.query

    return (
    <div className={`relative`}>
            {/* BOTÃO PERFIL */}
            <button onClick={() => {alternarVisualizacao({popUpNotificacoes: false, popUpPerfil: !opcao.popUpPerfil})}} className={`relative`}><div className={`bottom-0 right-0 rounded-full absolute border-2 border-white bg-[#56CA00] w-[12px] h-[12px]`}></div><Image className={`rounded-full`} width={38} height={38} alt='Foto de Perfil' src={`/images/avatar-perfil.png`}/></button>
            {/* BOTÃO PERFIL */}

            {/* OPÇÕES PERFIL TOGGLE */}
            <div className={`transition-opacity duration-300 ease-in-out ${opcao.popUpPerfil ? 'opacity-100  pointer-events-auto' : 'opacity-0  pointer-events-none'} w-[240px] bg-white absolute top-12 left-[-198px] py-[8px] rounded-md shadow-2xl`}>
                <div className={`flex flex-row items-center py-[8px] gap-2 px-[16px]`}>
                    <Image className={`rounded-full`} alt='Avatar Perfil' src={`/images/avatar-perfil.png`} width={40} height={40}/>
                    <div className={`flex flex-col`}>
                        <p className={`font-semibold text-sm`}>Rafael Almeida</p>
                        <p className={`text-xs text-[#898989]`}>rafaeladmin@gmail.com</p>
                    </div>
                </div>
                <hr />
                <div className={`flex flex-col justify-start w-full`}>
                    <button onClick={() => {router.push(`/${psicologo}/${usuario}/perfil`)}} className={`flex justify-start gap-1 px-[16px] text-[15px] py-[8px] tracking-tighter hover:bg-[#F7F6F7]`}><IconUser/>Meu Perfil</button>
                    <button onClick={() => {router.push(`/${psicologo}/${usuario}/configuracoes`)}} className={`flex justify-start gap-1 px-[16px] text-[15px] py-[8px] tracking-tighter hover:bg-[#F7F6F7]`}><IconSettings/>Configurações</button>
                </div>
                <div className={`flex justify-center items-center px-[16px] py-[8px] tracking-normal`}>
                    <button className={`transition flex justify-center items-center delay-[50ms] gap-1 duration-150 ease-in-out hover:bg-red-600 w-[97%] py-[8px] px-[14px] bg-red-400 text-white text-sm rounded-md`}><IconLogout/>Sair</button>
                </div>
            </div>
            {/* OPÇÕES PERFIL TOGGLE */}
        </div>
  )
}
