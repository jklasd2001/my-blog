import { ThemeProvider } from 'src/context'

import type { GatsbyBrowser } from 'gatsby'

import 'src/styles/global.css'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
