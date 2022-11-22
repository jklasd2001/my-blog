import path from 'path'

import { GatsbyNode } from 'gatsby'

export const sourceNodes: GatsbyNode['sourceNodes'] = ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createPage } = actions

  const PostTemplate = path.resolve(__dirname, 'src/templates/post_template.tsx')

  createPage({
    path: '/test',
    component: PostTemplate,
    context: {},
  })

  // Page Generating Function
  // const generatePostPage = ({
  //   node: {
  //     fields: { slug: any },
  //   },
  // }) => {
  //   const pageOptions = {
  //     path: slug,
  //     component: PostTemplate,
  //     context: { slug },
  //   }

  //   createPage(pageOptions)
  // }
}
