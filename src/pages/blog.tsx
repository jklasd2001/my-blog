import { graphql, PageProps } from 'gatsby'

import { Box, Layout, PostCard, Seo } from 'src/components'

type IndexPageProps = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: string
          fields: {
            slug: string
          }
          frontmatter: {
            title: string
            summary: string
            date: string
            categories: string[]
          }
        }
      },
    ]
  }
}

const BlogPage = ({ data }: PageProps<IndexPageProps>) => {
  return (
    <Layout className="max-w-screen-lg">
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.allMarkdownRemark.edges.map((edge) => (
          <PostCard
            key={edge.node.id}
            date={edge.node.frontmatter.date}
            title={edge.node.frontmatter.title}
            slug={edge.node.fields.slug}
            summary={edge.node.frontmatter.summary}
          />
        ))}
      </Box>
    </Layout>
  )
}

export const Head = () => <Seo title="블로그" />

export default BlogPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
  }
`
