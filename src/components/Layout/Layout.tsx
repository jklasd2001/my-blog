import { ReactNode } from 'react'

import { Container, Header } from 'src/components'

export const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <Container>
      <Header />
      <main className="text-slate-800 dark:text-slate-200">{children}</main>
    </Container>
  )
}
