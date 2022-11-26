import { HTMLAttributes } from 'react'

import classNames from 'classnames'

type ListProps = HTMLAttributes<HTMLUListElement>

export const List = ({ className = '', ...rest }: ListProps) => {
  return <ul className={classNames('list-none', className)} {...rest} />
}
