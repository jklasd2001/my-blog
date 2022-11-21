import { Link } from 'gatsby'

import Logo from '../../assets/images/logo1.svg'

export const Header = () => (
  <header className="flex py-6 border-b-slate-200">
    <Link to="/">
      <Logo className="w-[200px]" />
    </Link>

    <nav className="text-white ml-auto">
      <ul className="flex gap-4">
        <Link to="/" className="text-gray-800">
          About me
        </Link>
        <Link to="https://github.com/jklasd2001" className="text-gray-800">
          Github
        </Link>
      </ul>
    </nav>
  </header>
)
