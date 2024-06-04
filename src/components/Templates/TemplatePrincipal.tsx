import React from 'react'
import fonts from '@/styles/fonts.module.css'
import MenuAside from '@/components/MenuAside/MenuAside'
import MenuSuperiorDireito from '../MenuSuperiorDireito/MenuSuperiorDireito'

export default function TemplatePrincipal({children, dashboard = false, financeiro = false, todo = false, chat = false, calendario = false}: any) {
  return (
    <div className={`flex flex-row tracking-normal ${fonts.inter}`}>
        <MenuAside dashboard={dashboard} financeiro={financeiro} todo={todo} chat={chat} calendario={calendario}/>
        <div className={`ml-[260px] bg-[#F4F5FA] w-screen h-screen`}>
            <MenuSuperiorDireito/>
            <div className={`p-[24px]`}>
              {children}
            </div>
        </div>
    </div>
  )
}