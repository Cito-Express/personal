"use client"

import { useTheme } from "next-themes";
import Image from "next/image";

export default function Loading() {
  const {theme} = useTheme()
  return (
    <div className="h-[100dvh] center">
        <Image src={theme === 'dark' ? '/logo-dark.svg' : '/logo-white.svg'} alt="logo" width={40} height={40} className="animate-spin" />
    </div>
  )
}
