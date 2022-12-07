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
      <Container className="relative">
        <div className="prose dark:prose-invert lg:prose-lg prose-slate mt-8">
          <h2>{title}</h2>

          <span>{date}</span>

          <article dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <div className="absolute h-full top-0 right-0">
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
