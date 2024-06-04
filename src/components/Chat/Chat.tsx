import React from 'react'
import fonts from '@/styles/fonts.module.css'
import MenuAside from '@/components/MenuAside/MenuAside'
import TemplatePrincipal from '../Templates/TemplatePrincipal'
import { useRouter } from 'next/router'
export default function index({children}: any) {
  const router = useRouter()
  const {psicologo, usuario, opcao_menu} = router.query
  return (
    <TemplatePrincipal chat={true}>
      <b>{usuario}</b> utilizando a página <b>{opcao_menu}</b> do psicólogo <b>{psicologo}</b>
    </TemplatePrincipal>
  )
}
