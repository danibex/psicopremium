import React, { useState } from 'react'
import { IconBell, IconLogout, IconSettings, IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import fonts from '@/styles/fonts.module.css'
import BotaoPerfil from './BotaoPerfil';
import BotaoNotificacoes from './BotaoNotificacoes';
export default function MenuSuperiorDireito() {

  return (
    <div className={`${fonts.inter} px-[24px] py-[10px] flex flex-row justify-end items-center gap-[7px]`}>
        <BotaoNotificacoes/>
        <BotaoPerfil/>
    </div>
  )
}
