import { graphql, PageProps } from 'gatsby'

import { Container, Layout, PostCard, Seo } from 'src/components'
import { AllMarkdownRemark, PostItem } from 'src/types'

interface BlogPageProps extends AllMarkdownRemark<PostItem> {
  location: {
    search: string
  }
}

const IndexPage = ({ data }: PageProps<BlogPageProps>) => {
  return (
    <Layout>
      <Container className="container mx-auto max-w-screen-lg px-8 lg:px-0">
        <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-3">
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
        </div>
      </Container>
    </Layout>
  )
}

export const Head = () => <Seo title="블로그" />

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { publish: { eq: true } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY년 MM월 DD일")
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
