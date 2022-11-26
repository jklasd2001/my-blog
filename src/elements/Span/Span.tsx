import { HTMLAttributes } from 'react'

import classNames from 'classnames'

type SpanProps = HTMLAttributes<HTMLParagraphElement>

export const Span = ({ className, ...rest }: SpanProps) => {
  return <span className={classNames('text-lg', className)} {...rest} />
}
