import { Seo, Layout } from 'src/components'

const IndexPage = () => (
  <Layout>
    <div className="bg-black">반갑습니다. 웹 프론트엔드 개발자 김영수입니다.</div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
