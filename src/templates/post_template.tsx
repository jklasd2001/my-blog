import { graphql, PageProps } from 'gatsby'

import { Container, Layout, Seo, TableOfContents } from 'src/components'

type PostTemplateProps = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          html: string
          frontmatter: {
            title: string
            summary: string
            date: string
            categories: string
          }
          tableOfContents: string
        }
      },
    ]
  }
}

const PostTemplate = (props: PageProps<PostTemplateProps>) => {
  const {
    html,
    frontmatter: { title, categories, summary, date },
    tableOfContents,
  } = props.data.allMarkdownRemark.edges[0].node

  return (
    <Layout>
      <Seo title={title} description={summary} />
      <Container
        type="main"
        className="prose prose-sm relative mt-8 px-8 pb-10 prose-a:no-underline prose-ul:list-decimal prose-hr:my-6 dark:prose-invert lg:prose-base lg:px-0 lg:prose-hr:my-6"
      >
        {/* 제목 */}
        <h1>{title}</h1>
        {/* 날짜 */}
        <small>{date}</small>
        {/* 구분선 */}
        <hr />

        {/* 목차 */}
        <TableOfContents tableOfContents={tableOfContents} />

        <hr />

        {/* 블로그 내용 */}
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY년 MM월 DD일")
            categories
          }
          tableOfContents
        }
      }
    }
  }
`
