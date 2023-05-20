import { useCallback } from 'react'

import { Link } from 'gatsby'
import { HiMoon, HiSun } from 'react-icons/hi2'
import useDarkMode from 'use-dark-mode'

import { Logo } from './components'
import { Container } from '../Container'
import { IconAdornment } from '../IconAdornment'

export const Header = () => {
  const darkMode = useDarkMode(undefined, { classNameDark: 'dark' })

  const handleDarkmodeToggle = useCallback(() => {
    darkMode.toggle()
  }, [darkMode])

  return (
    <header className="border-b border-b-slate-300 py-3 dark:border-b-slate-300/10 lg:py-4">
      <Container
        type="header"
        className="flex px-4 text-gray-800 dark:text-slate-100 md:px-0 lg:px-0"
      >
        <Link to="/" className="flex">
          <Logo className="w-[120px] text-gray-800 dark:text-slate-200 lg:w-[160px]" />
        </Link>

        <nav className="ml-auto">
          <ul className="flex items-center gap-4 lg:gap-6">
            <Link to="/about-me" className="text-base uppercase lg:text-lg">
              About me
            </Link>

            <Link to="/" className="text-base uppercase lg:text-lg">
              Blog
            </Link>

            <IconAdornment icon={darkMode.value ? HiMoon : HiSun} onClick={handleDarkmodeToggle} />
          </ul>
        </nav>
      </Container>
    </header>
  )
}
