import { Fragment } from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import { Footer, Header, Container } from 'src/components'

import {} from '../Container'

export const Layout = ({ children }: any) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data)

  return (
    <Fragment>
      <Container>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: `var(--size-content)`,
            padding: `var(--size-gutter)`,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </Container>
    </Fragment>
  )
}
