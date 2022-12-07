import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { Link } from 'gatsby'

import { useTheme } from 'src/context'

import { Container } from '../Container'
import { Logo } from './components'

export const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="py-6 border-b border-b-slate-200 dark:border-b-slate-300/10">
      <Container className="flex">
        <Link to="/">
          <Logo className="w-[200px] dark:text-white text-gray-800" />
        </Link>

        <nav className="text-white ml-auto">
          <ul className="flex gap-6 items-center">
            <Link to="/" className="text-gray-800 dark:text-white text-lg font-medium uppercase">
              About me
            </Link>

            <Link
              to="/blog"
              className="text-gray-800 dark:text-white text-lg font-medium uppercase"
            >
              Blog
            </Link>

            <button
              className="w-8 h-8 p-1"
              onClick={() => {
                toggleTheme()
              }}
            >
              {theme === 'dark' ? (
                <SunIcon color="#dd9c4f" className="cursor-pointer" />
              ) : (
                <MoonIcon className="cursor-pointer text-gray-900" />
              )}
            </button>

            {/* <Link to="https://github.com/jklasd2001" className="text-gray-800">
            Github
          </Link> */}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
