import { Layout, Seo } from 'src/components'

const NotFoundPage = () => (
  <Layout>
    <h2>죄송합니다. 해당 페이지를 찾을 수 없습니다.</h2>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
