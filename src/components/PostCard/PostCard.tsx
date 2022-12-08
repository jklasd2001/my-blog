import { Link, navigate } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { Box, Heading, Paragraph, Span } from 'src/elements'

interface PostCardProps {
  slug: string
  title: string
  summary: string
  date: string
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export const PostCard = ({ title, summary, date, slug, thumbnail }: PostCardProps) => {
  return (
    <Box
      className="overflow-hidden rounded border shadow-md transition-all hover:translate-y-1 hover:shadow-lg"
      onClick={() => {
        navigate(slug)
      }}
    >
      <GatsbyImage image={thumbnail.childImageSharp.gatsbyImageData} alt="dd" />
      <Box className="p-6">
        <Link to="/">
          <Heading type="h4">{title}</Heading>
          <Paragraph>{summary}</Paragraph>
        </Link>

        <Box>
          <Span>{date}</Span>
        </Box>
      </Box>
    </Box>
  )
}
