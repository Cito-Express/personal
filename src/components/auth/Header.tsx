"use client"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "../ui"
const Header = () => {
    const {theme} = useTheme()
  return (
    <>
    <header className="sticky top-0 z-50 bg-background/20 backdrop-blur-sm border-b border-line">
        <nav className="main flex items-center justify-between h-[70px]">
            <Link href="/">
            <Image src={theme === 'dark' ? '/full-white-logo.svg' : '/full-dark-logo.svg'} alt="logo" width={90} height={90} />
            </Link>

            <div className="flex items-center gap-4">
                <ThemeToggle />
            </div>
        </nav>
    </header>
    </>
  )
}

export default Header