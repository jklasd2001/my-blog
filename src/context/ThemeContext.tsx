import { createContext, ReactNode, useContext, useLayoutEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const isBrowser = typeof window !== 'undefined'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
})

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  const prefersColorScheme =
    isBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const localTheme = isBrowser && window.localStorage.getItem('theme')
  const initialTheme = localTheme || prefersColorScheme

  const [theme, setTheme] = useState<Theme>(initialTheme as Theme)

  const toggleTheme = () => {
    theme === 'light' ? changeTheme('dark') : changeTheme('light')
  }

  const changeTheme = (theme: Theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setTheme(theme)
    window.localStorage.setItem('theme', theme)
  }

  useLayoutEffect(() => {
    if (theme === 'dark') {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
