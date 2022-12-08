import { graphql, PageProps } from 'gatsby'
import queryString, { ParsedQuery } from 'query-string'

import { Categories, Container, Layout, PostCard, Seo } from 'src/components'
import { Box } from 'src/elements'
import { AllMarkdownRemark, PostItem } from 'src/types'

const CATEGORY_LIST = {
  ALL: 5,
  React: 2,
  Gatsby: 1,
}

interface BlogPageProps extends AllMarkdownRemark<PostItem> {
  location: {
    search: string
  }
}

const BlogPage = ({ location: { search }, data }: PageProps<BlogPageProps>) => {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedCategory =
    typeof parsed.category !== 'string' || !parsed.category ? 'ALL' : parsed.category

  return (
    <Layout>
      <Container className="container mx-auto max-w-screen-lg">
        <Categories selectedCategory={selectedCategory} categoryList={CATEGORY_LIST} />
        <Box className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.allMarkdownRemark.edges.map(
            ({
              node: {
                id,
                fields: { slug },
                frontmatter: { date, title, summary, thumbnail },
              },
            }) => (
              <PostCard
                key={id}
                date={date}
                title={title}
                slug={slug}
                summary={summary}
                thumbnail={thumbnail}
              />
            ),
          )}
        </Box>
      </Container>
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
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
  }
`
