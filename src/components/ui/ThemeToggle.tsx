'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

export default function ThemeToggle() {
    const {theme, setTheme} = useTheme()
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  return (
    <div className='center h-10 w-10 cursor-pointer text-main/80' onClick={toggleTheme}>
      {theme === 'dark' ? <Sun size={22} /> : <Moon size={22}/>}
    </div>
  )
}
