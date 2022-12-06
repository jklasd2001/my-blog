import { Box } from 'src/elements'

interface TableOfContentsProps {
  tableOfContents: string
}

/**
 * 목차 컴포넌트입니다.
 * @param param0
 * @returns
 */
export const TableOfContents = ({ tableOfContents }: TableOfContentsProps) => {
  return (
    <Box
      className="not-prose sticky top-10 bg-pink-500"
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
  )
}
