import { HtmlHTMLAttributes } from 'react'

import classNames from 'classnames'

type DividerProps = HtmlHTMLAttributes<HTMLHRElement>

export const Divider = ({ className = '', ...rest }: DividerProps) => {
  return <hr className={classNames('my-10', className)} {...rest} />
}
