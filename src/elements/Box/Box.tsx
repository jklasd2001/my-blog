import { HTMLAttributes } from 'react'

import classNames from 'classnames'

type BoxProps = HTMLAttributes<HTMLParagraphElement>

export const Box = ({ className, ...rest }: BoxProps) => {
  return <div className={classNames('text-lg', className)} {...rest} />
}
