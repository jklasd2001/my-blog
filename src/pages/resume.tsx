import { Seo, Layout } from 'src/components'

const Resume = () => (
  <Layout>
    <h1>프론트엔드 개발자 김영수 이력서</h1>
    <p>Updated at: 2022년 11월 8일에 </p>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="resume" />

export default Resume
