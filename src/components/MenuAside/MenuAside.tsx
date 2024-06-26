import React from 'react'
import { useRouter } from 'next/router';
import BotaoMenuAside from '@/components/MenuAside/BotaoMenuAside'
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';  
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { IconBrandHipchat, IconCalendar, IconList } from '@tabler/icons-react';
export default function DashboardMenuAside({dashboard, financeiro, todo, chat, calendario}: any) {
  const router = useRouter()
  const {psicologo, usuario, opcao_menu} = router.query
  return (
    <aside className={`fixed top-0 left-0 w-[260px] h-[100vh] bg-[#28243D]`}>
        <div className={`h-full overflow-y-auto`}>
          <div className='py-[20px] px-[22px] flex flex-row justify-center'>
            <p className={`text-[#D4D1E9] text-2xl font-medium`}>Psico Premium</p>
          </div>
          <hr  className={`mx-3 color-[#D4D1E9]`}/>
          <BotaoMenuAside active={dashboard} href={`/${psicologo}/${usuario}/dashboard`}><DataSaverOffIcon/> Dashboard</BotaoMenuAside>
          <BotaoMenuAside active={calendario} href={`/${psicologo}/${usuario}/calendario`}><IconCalendar/> Calendario</BotaoMenuAside>
          <BotaoMenuAside active={chat} href={`/${psicologo}/${usuario}/chat`}><IconBrandHipchat/> Chat</BotaoMenuAside>
          <BotaoMenuAside active={todo} href={`/${psicologo}/${usuario}/to-do`}><IconList/> To do List</BotaoMenuAside>
          <BotaoMenuAside active={financeiro} href={`/${psicologo}/${usuario}/financeiro`}><AttachMoneyIcon/> Financeiro</BotaoMenuAside>
        </div>
      </aside>
  )
}
