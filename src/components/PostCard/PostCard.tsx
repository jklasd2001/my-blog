import { Link, navigate } from 'gatsby'

import { Box, Heading, Paragraph, Span } from 'src/elements'

interface PostCardProps {
  slug: string
  title: string
  summary: string
  date: string
}

export const PostCard = ({ title, summary, date, slug }: PostCardProps) => {
  return (
    <Box
      className="rounded hover:translate-y-1 overflow-hidden border shadow-md hover:shadow-lg transition-all"
      onClick={() => {
        navigate(slug)
      }}
    >
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
