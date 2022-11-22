import { graphql, PageProps } from 'gatsby'

import { Box, Layout, PostCard, Seo } from 'src/components'

type IndexPageProps = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          id: string
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
    <Layout>
      <Box className="flex flex-wrap -m-4">
        {data.allMarkdownRemark.edges.map((edge) => (
          <PostCard
            key={edge.node.id}
            date={edge.node.frontmatter.date}
            title={edge.node.frontmatter.title}
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }) {
      edges {
        node {
          id
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
