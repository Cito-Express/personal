"use client";

import { Bell, Menu } from "lucide-react";
import { ThemeToggle } from "../ui";
import { useState } from "react";
import Mobilebar from "./Mobilebar";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <>
      <header className="border-b border-line sticky top-0 z-50 bg-background dark:bg-secondary backdrop-blur-sm shadow-[0_2px_5px_rgba(0,0,0,0.02)]">
        <nav className="md:h-[70px] h-[60px] w-[90%] mx-auto  flex items-center justify-between ">
          <Link href="/">
            <Image
              src={theme === "dark" ? "/logo-white.svg" : "/logo-dark.svg"}
              alt="logo"
              width={30}
              height={30}
            />
          </Link>

          <div className="flex items-center gap-4">
              <ThemeToggle />
            <div className="h-10 w-10 center rounded-full bg-foreground">
              <Bell size={20} className="text-main/80" />
            </div>
            <div className="cursor-pointer h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={`https://api.dicebear.com/9.x/initials/svg?seed=Jackson&backgroundColor=f54a00&fontSize=45`}
                alt="profile"
                width={44}
                height={44}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div className="block md:hidden">
              <Menu onClick={() => setIsOpen(true)} />
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <Mobilebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
