import { graphql, PageProps } from 'gatsby'

import { Layout, Seo } from 'src/components'
import { Box } from 'src/elements'

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
        }
      },
    ]
  }
}

const PostTemplate = (props: PageProps<PostTemplateProps>) => {
  const {
    html,
    frontmatter: { title, categories, summary, date },
  } = props.data.allMarkdownRemark.edges[0].node

  return (
    <Layout>
      <Seo title={title} description={summary} />

      <Box className="prose lg:prose-lg prose-slate mt-8">
        <h2>{title}</h2>

        <span>{date}</span>

        <article dangerouslySetInnerHTML={{ __html: html }} />
      </Box>
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
        }
      }
    }
  }
`
