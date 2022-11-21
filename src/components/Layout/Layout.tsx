import { Fragment } from 'react'

import { Container, Header } from 'src/components'

export const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <Container>
        <Header />
        <main className="text-slate-800">{children}</main>
        {/* <Footer /> */}
      </Container>
    </Fragment>
  )
}
