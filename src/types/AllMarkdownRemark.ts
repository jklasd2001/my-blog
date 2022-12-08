export interface AllMarkdownRemark<T> {
  allMarkdownRemark: {
    edges: T[]
  }
}

/**
 * gatsby-node.ts에서 마크다운으로 페이지 생성할 때 slug만 불러와 페이지 생성할 때 사용합니다.
 */
export interface NodeFieldsSlug {
  node: {
    fields: {
      slug: string
    }
  }
}
