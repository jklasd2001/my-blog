import path from 'path'

import { GatsbyNode } from 'gatsby'
import { createFilePath } from 'gatsby-source-filesystem'

interface Post {
  allMarkdownRemark: {
    edges: AAA[]
  }
}

interface AAA {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      date: string
      summary: string
      thumbnail: string
    }
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions

  // GraphQL 쿼리
  const queryAllMarkdownData = await graphql<Post>(`
    {
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
  `)

  if (queryAllMarkdownData.errors) {
    throw queryAllMarkdownData.errors
  }

  // 포스트 템플릿
  const postTemplate = path.resolve(`./src/templates/post_template.tsx`)

  const generatePostPage = (edge: AAA) => {
    const {
      node: {
        fields: { slug },
      },
    } = edge
    const pageOptions = {
      path: slug,
      component: postTemplate,
      context: { slug },
    }

    createPage(pageOptions)
  }

  queryAllMarkdownData.data?.allMarkdownRemark.edges.forEach(generatePostPage)
}

/**
 * 
 * @param param0 
 * 
 * gatsby-source-filesystem 플러그인을 통해 루트 디렉토리의 contents 디렉토리를 마크다운 데이터 경로로 설정해주었습니다.

따라서 contents 디렉토리 내의 마크다운 파일의 경로와 이름을 통해 Slug 데이터가 생성됩니다.

예시로 contents/2021-02-18/what-is-cookie-and-session.md 파일의 경우에는 /2021-02-18/what-is-cookie-and-session/ 과 같은 Slug가 생성됩니다.
 */
export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode })

    createNodeField({ node, name: 'slug', value: slug })
  }
}
