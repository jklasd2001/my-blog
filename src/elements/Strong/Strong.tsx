import { HTMLAttributes } from 'react'

import classNames from 'classnames'

type StrongProps = HTMLAttributes<HTMLElement>

export const Strong = ({ className = '', ...rest }: StrongProps) => {
  return <strong className={classNames(className)} {...rest} />
}
