import { ReactNode } from 'react'

import { Header } from 'src/components'

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
