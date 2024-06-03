import React, { useState } from 'react'
import { IconBell, IconLogout, IconSettings, IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import fonts from '@/styles/fonts.module.css'
import BotaoPerfil from './BotaoPerfil';
import BotaoNotificacoes from './BotaoNotificacoes';
export default function MenuSuperiorDireito() {
  const [opcao, setOpcao] = useState({popUpNotificacoes: false, popUpPerfil: false})

  const alternarVisualizacao = ({popUpNotificacoes, popUpPerfil}) => {
    setOpcao({popUpNotificacoes: popUpNotificacoes, popUpPerfil: popUpPerfil})
  }

  return (
    <div>
    <div className={`${fonts.inter} px-[24px] py-[10px] flex flex-row justify-end items-center gap-[7px]`}>
        <BotaoNotificacoes alternarVisualizacao={alternarVisualizacao} opcao={opcao}/>
        <BotaoPerfil alternarVisualizacao={alternarVisualizacao} opcao={opcao}/>
    </div>
    </div>
  )
}
