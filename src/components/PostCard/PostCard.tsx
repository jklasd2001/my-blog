import { Link } from 'gatsby'

import { Box, Heading, Paragraph, Span } from 'src/components'

interface PostCardProps {
  title: string
  summary: string
  date: string
}

export const PostCard = ({ title, summary, date }: PostCardProps) => {
  return (
    <Box className="rounded hover:translate-y-1 overflow-hidden bg-black shadow-md hover:shadow-lg transition-all">
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
