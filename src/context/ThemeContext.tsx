import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

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
  const [theme, setTheme] = useState<Theme>('light')

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

  useEffect(() => {
    const prefersColorScheme =
      isBrowser && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    const localTheme = isBrowser && window.localStorage.getItem('theme')
    const initialTheme = localTheme || prefersColorScheme

    changeTheme(initialTheme as Theme)
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
