import { Link } from 'gatsby'

export const Header = ({ siteTitle }: { siteTitle: string }) => (
  <header className="flex p-6 border-b-slate-200">
    <Link to="/">Logo</Link>

    <nav className="text-white ml-auto">
      <ul className="flex gap-4">
        <Link to="/resume">About me</Link>
        <Link to="/blog">Blog</Link>
        <Link to="https://github.com/jklasd2001">Github</Link>
      </ul>
    </nav>
  </header>
)
