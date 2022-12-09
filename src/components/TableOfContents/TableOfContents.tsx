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
    <div
      className="sticky top-32 border-l-2 border-l-slate-200 pl-4 text-base text-slate-500"
      dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
  )
}
