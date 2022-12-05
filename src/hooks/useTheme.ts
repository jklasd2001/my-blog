import { useLayoutEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export const useTheme = () => {
  const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
  const localTheme = localStorage.getItem('theme')
  const initialTheme = localTheme || prefersColorScheme

  const [theme, setTheme] = useState<Theme>(initialTheme as Theme)

  const toggleTheme = () => {
    if (theme !== 'dark') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  useLayoutEffect(() => {
    if (theme === 'dark') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { theme, toggleTheme }
}
