import { graphql, PageProps } from 'gatsby'

import { Layout, PostCard, Seo } from 'src/components'
import { Box } from 'src/elements'
import { AllMarkdownRemark, PostItem } from 'src/types'

const BlogPage = ({ data }: PageProps<AllMarkdownRemark<PostItem>>) => {
  return (
    <Layout>
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.allMarkdownRemark.edges.map(
          ({
            node: {
              id,
              fields: { slug },
              frontmatter: { date, title, summary },
            },
          }) => (
            <PostCard key={id} date={date} title={title} slug={slug} summary={summary} />
          ),
        )}
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
