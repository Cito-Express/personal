"use client"

import { X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image"
import Link from "next/link";

interface SidebarProps {
  onClose?: () => void;
}

export default function Sidebar({onClose}: SidebarProps) {
  const {theme} = useTheme()
  return (
    <div className="h-full w-full bg-background dark:bg-secondary border-r border-line">
      <header className="md:h-[70px] h-[60px] flex items-center justify-between px-4 border-b border-line">
      <Link href="/">
            <Image src={theme === 'dark' ? '/full-white-logo.svg' : '/full-dark-logo.svg'} alt="logo" width={80} height={80} />
            </Link>

            <div  className="md:hidden h-10 w-10 cursor-pointer rounded-full flex items-center justify-center bg-foreground">
              <X size={22} onClick={onClose}/>
            </div>
      </header>
    </div>
  )
}
