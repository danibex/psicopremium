import React, { useState } from 'react'
import { IconBell, IconLogout, IconSettings, IconUser } from '@tabler/icons-react';
import Image from 'next/image';
import fonts from '@/styles/fonts.module.css'
import BotaoPerfil from './BotaoPerfil';
export default function MenuSuperiorDireito() {

  return (
    <div className={`${fonts.inter} px-[24px] py-[10px] flex flex-row justify-end items-center gap-[7px]`}>
        <div className={`relative`}>
            <button className={`rounded-full relative transition delay-150 duration-300 ease-in-out hover:bg-[#E5E5EB] p-1`}><div className={`left-[23px] top-[8px] rounded-full w-[8px] h-[8px] bg-red-600 absolute`}></div><IconBell size={32} stroke={1.5} /></button>
            <div className={`absolute top-12 left-[-324px] w-[360px] max-h-[95vh] bg-white rounded-md shadow-2xl`}>
                <div className={`py-[8px] px-[16px]`}>
                    <p className={`text-[1.125rem] font-medium`}>Teste</p>

                </div>
            </div>
        </div>
        <BotaoPerfil/>
    </div>
  )
}
