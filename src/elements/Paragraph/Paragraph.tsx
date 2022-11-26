import { HTMLAttributes } from 'react'

import classNames from 'classnames'

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>

export const Paragraph = ({ className, ...rest }: ParagraphProps) => {
  return <p className={classNames('text-lg', className)} {...rest} />
}
