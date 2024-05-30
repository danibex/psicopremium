import Link from 'next/link'
import React from 'react'

export default function BotaoMenuAside({children, href, active}: any) {
  return (
    <Link href={href} className={`${active ? 'bg-gradient-to-r from-[#C5ABFF] via-[#A881FF] to-[#905CFF] ' : ' hover:bg-[#2F2C45] active:bg-[#37334C] '} text-[#E7E3FC] w-[95%] my-[10px] ml-0 py-[8px] px-[22px]  text-[16px] transition delay-75 ease-in-out  flex flex-row justify-start items-center gap-2 rounded-r-full`}>{children}</Link>
  )
}
