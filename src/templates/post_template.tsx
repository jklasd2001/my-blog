import { graphql, PageProps } from 'gatsby'

import { Layout } from 'src/components'

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
  console.log(props.data.allMarkdownRemark.edges[0].node.html)
  return (
    <Layout>
      <article
        className="prose lg:prose-xl prose-slate"
        dangerouslySetInnerHTML={{ __html: props.data.allMarkdownRemark.edges[0].node.html }}
      />
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
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
  }
`
