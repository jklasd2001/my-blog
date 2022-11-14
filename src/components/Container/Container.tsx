import { HTMLAttributes } from 'react'

import classNames from 'classnames'

type ContainerProps = HTMLAttributes<HTMLDivElement>

export const Container = ({ className, ...rest }: ContainerProps) => {
  return <div className={classNames('container max-w-screen-md mx-auto', className)} {...rest} />
}
