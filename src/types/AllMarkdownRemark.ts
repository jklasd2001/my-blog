export interface AllMarkdownRemark<T> {
  allMarkdownRemark: {
    edges: T[]
  }
}

export interface NodeFieldsSlug {
  node: {
    fields: {
      slug: string
    }
  }
}
