import React from 'react'
import fonts from '@/styles/fonts.module.css'
import MenuAside from '@/components/MenuAside/MenuAside'
import TemplatePrincipal from '../Templates/TemplatePrincipal'
import { useRouter } from 'next/router'
import CardSessoes from './CardSessoes'
import CardTransacoes from './CardTransacoes'
import VendasSemanais from './VendasSemanais'

export default function index({children}: any) {
  const router = useRouter()
  const {psicologo, usuario, opcao_menu} = router.query
  return (
    <TemplatePrincipal dashboard={true}>
      <div className={`${fonts.inter}`}>
        <div className={`flex flex-row gap-4`}>
          <CardSessoes/>
          <CardTransacoes/>
        </div>
          <VendasSemanais/>
      </div>
    </TemplatePrincipal>
  )
}
