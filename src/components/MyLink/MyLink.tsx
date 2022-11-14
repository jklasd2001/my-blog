import { AnchorHTMLAttributes } from 'react'

import classNames from 'classnames'

type MyLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const MyLink = ({ className = '', ...rest }: MyLinkProps) => {
  return <a className={classNames('hover:underline cursor-pointer', className)} {...rest} />
}
