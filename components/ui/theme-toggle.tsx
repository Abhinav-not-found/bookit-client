'use client'
import { useThemeAnimation } from '@space-man/react-theme-animation'
import { Moon, Sun } from 'lucide-react'
import { Button } from './button'

export default function ThemeToggle() {
  const { theme, toggleTheme, ref } = useThemeAnimation()

  return (
    <Button variant={'ghost'} ref={ref} onClick={toggleTheme} className="theme-toggle-btn">
      {theme === 'light' ? <Moon/> : <Sun/>}
    </Button>
  )
}
