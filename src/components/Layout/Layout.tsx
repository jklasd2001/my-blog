import { Fragment } from 'react'

import { Container } from 'src/components'

export const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <Container>
        {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
        <main className="text-gray-200">{children}</main>
        {/* <Footer /> */}
      </Container>
    </Fragment>
  )
}
