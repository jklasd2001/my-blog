import { StaticImage } from 'gatsby-plugin-image'

import Seo from 'src/components/seo'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={['auto', 'webp', 'avif']}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1 css={{ color: 'red' }}>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p css={{ backgroundColor: 'red' }}>
        <b>Example pages:</b> <br />
        Edit <code>src/pages/index.js</code> to update this page.
      </p>
    </div>
    <ul>opkpo</ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
