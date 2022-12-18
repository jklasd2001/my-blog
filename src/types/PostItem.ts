import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface PostItem {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      publish: boolean
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}
