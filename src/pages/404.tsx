import { Heading, Layout, Seo } from 'src/components'

const NotFoundPage = () => (
  <Layout>
    <Heading type="h2">죄송합니다. 해당 페이지를 찾을 수 없습니다.</Heading>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
