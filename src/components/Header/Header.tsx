import { Link } from 'gatsby'

import { useTheme } from 'src/hooks'

import Logo from '../../assets/images/logo1.svg'

export const Header = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="flex py-6 border-b-slate-200 dark:bg-slate-900">
      <Link to="/">
        <Logo className="w-[200px]" />
      </Link>

      <nav className="text-white ml-auto">
        <ul className="flex gap-4">
          <div
            className="text-black"
            onClick={() => {
              toggleTheme()
            }}
          >
            {theme}
          </div>

          <Link to="/" className="text-gray-800 text-lg font-medium uppercase">
            About me
          </Link>

          <Link to="/blog" className="text-gray-800 text-lg font-medium uppercase">
            Blog
          </Link>

          {/* <Link to="https://github.com/jklasd2001" className="text-gray-800">
            Github
          </Link> */}
        </ul>
      </nav>
    </header>
  )
}
