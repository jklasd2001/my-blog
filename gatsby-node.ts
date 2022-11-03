import { resolve } from 'path'

import type { GatsbyNode } from 'gatsby'

export const sourceNodes: GatsbyNode['sourceNodes'] = ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createPage } = actions

  createPage({
    path: '/using-dsg',
    component: resolve(__dirname, './src/templates/using-dsg.tsx'),
    context: {},
    defer: true,
  })
}
