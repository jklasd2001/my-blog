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
        className="prose prose-slate relative mt-8 pb-10 prose-hr:my-6 dark:prose-invert lg:prose-lg lg:prose-hr:my-6"
      >
        {/* 제목 */}
        <h2>{title}</h2>
        {/* 날짜 */}
        <small>{date}</small>
        {/* 구분선 */}
        <hr />

        <article dangerouslySetInnerHTML={{ __html: html }} />

        <div className="absolute top-0 -right-16 hidden h-full translate-x-full xl:block">
          <TableOfContents tableOfContents={tableOfContents} />
        </div>
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
            date(formatString: "YYYY.MM.DD")
            categories
          }
          tableOfContents
        }
      }
    }
  }
`
