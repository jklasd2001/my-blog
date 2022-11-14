import { HTMLAttributes } from 'react'

import classNames from 'classnames'

type RowProps = HTMLAttributes<HTMLDivElement>

export const Row = ({ className = '', ...rest }: RowProps) => {
  return <div className={classNames('py-12 border-b border-b-gray-200', className)} {...rest} />
}
