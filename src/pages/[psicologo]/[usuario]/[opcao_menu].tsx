import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Dashboard from '@/components/Dashboard/Dashboard'
import Financeiro from '@/components/Financeiro/Financeiro'
import Configuracoes from '@/components/Configuracoes/Configuracoes'
import Perfil from '@/components/Perfil/Perfil'
import ToDoList from '@/components/ToDoList/ToDoList'
import Chat from '@/components/Chat/Chat'
import Calendario from '@/components/Calendario/Calendario'
export default function dashboard() {
  const router = useRouter()
  const {opcao_menu} = router.query
  const [opcaoMenuRederiza, setOpcaoMenuRederizar] = useState<React.ReactNode>(null)
 
  useEffect(() => {    
    switch(opcao_menu) {
      case 'to-do':
        setOpcaoMenuRederizar(<ToDoList/>)
      break;
      case 'chat':
        setOpcaoMenuRederizar(<Chat/>)
      break;
      case 'dashboard':
        setOpcaoMenuRederizar(<Dashboard/>)
      break;
      case 'financeiro':
        setOpcaoMenuRederizar(<Financeiro/>)
      break;
      case 'calendario':
        setOpcaoMenuRederizar(<Calendario/>)
      break;
      case 'configuracoes':
        setOpcaoMenuRederizar(<Configuracoes/>)
      break;
      case 'perfil':
        setOpcaoMenuRederizar(<Perfil/>)
      break;
      default:
        setOpcaoMenuRederizar(null) 
      break;
    }
  }, [opcao_menu])

  return (
    <div>
        {opcaoMenuRederiza}
    </div>
  )
}
