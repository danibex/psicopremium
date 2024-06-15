import { IconBell, IconMail, IconMailOpened, IconX } from '@tabler/icons-react'
import React, { useState } from 'react'
import Notificacao from './Notificacao'
import fonts from '@/styles/fonts.module.css'
import { useRouter } from 'next/router'
export default function BotaoNotificacoes({alternarVisualizacao, opcao}) {
    
    const [notificacoesVisualizadas, setNotificacoesVisualizadas] = useState(false)
   
    return (
    <div className={`relative z-50`}>
        <button onClick={() => alternarVisualizacao({popUpNotificacoes: !opcao.popUpNotificacoes, popUpPerfil: false})} className={`rounded-full relative transition delay-150 duration-300 ease-in-out hover:bg-[#E5E5EB] p-1`}><div className={`${notificacoesVisualizadas ? 'hidden' : ''} left-[23px] top-[8px] rounded-full w-[8px] h-[8px] bg-red-600 absolute`}></div><IconBell size={32} stroke={1.5} /></button>
        <div className={`transition-opacity duration-300 ease-in-out ${opcao.popUpNotificacoes ? 'opacity-100  pointer-events-auto' : 'opacity-0  pointer-events-none'} absolute top-12 left-[-324px] w-[360px] overflow-y-auto max-h-[80vh] bg-white rounded-md shadow-2xl`}>
            
            <div className={`flex flex-row justify-between items-center py-[8px] px-[16px]`}>
                <p className={`text-[1.125rem] font-semibold`}>Notificações</p>
                <div className={`flex flex-row items-center gap-4`}>
                    <p className={`${notificacoesVisualizadas ? 'hidden' : ''} bg-[#EDE4FF] rounded-l-full rounded-r-full text-[14px] px-3 py-1 font-semibold text-[#8C57FF]`}>4 Novas</p>
                    <button onClick={() => setNotificacoesVisualizadas(!notificacoesVisualizadas)} className={`flex justify-center items-center hover:bg-[#EFEEF0] rounded-full p-2`}>
                        <IconMail className={`${notificacoesVisualizadas ? 'hidden' : 'flex'}`}/>
                        <IconMailOpened className={`${notificacoesVisualizadas ? 'flex' : 'hidden'}`}/>
                    </button>
                </div>
            </div>
            
            <hr/>

            <div className={`flex flex-col mx-0 my-0`}>
                <Notificacao notificacoesVisualizadas={notificacoesVisualizadas} imagem_notificacao='/images/notificacoes/avatar-perfil.png' titulo_notificacao='Parabéns Rafael 🎉' descricao_notificacao='Suas avaliações subiram 15%' data_notificacao='2 de junho, 15h30'/>
                <Notificacao notificacoesVisualizadas={notificacoesVisualizadas} imagem_notificacao='/images/notificacoes/rebeca.png' titulo_notificacao='Rebeca Santana' descricao_notificacao='Sessão com Rebeca Santana marcada para 12h45 começará em instantes!' data_notificacao='3 de junho, 12h30'/>
                <Notificacao notificacoesVisualizadas={notificacoesVisualizadas} imagem_notificacao='/images/notificacoes/grafico.png' titulo_notificacao='Relatório mensal gerado' descricao_notificacao='O relatório financeiro do mês de junho está pronto' data_notificacao='1 de junho, 12h00'/>
                <Notificacao notificacoesVisualizadas={notificacoesVisualizadas} imagem_notificacao='/images/notificacoes/juca.png' titulo_notificacao='Juca Santos' descricao_notificacao='Você tem uma nova mensagem de Juca Santos' data_notificacao='2 de junho, 21h02'/>
            </div>

            <div className={`w-full flex justify-center items-center p-[10px]`}>
                <button className={`${fonts.inter} text-white font-normal w-full p-[4px] bg-[#8C57FF] hover:bg-[#7E4EE5] rounded-md shadow-md`}>Ver todas</button>
            </div>

        </div>
    </div>
  )
}
