import { HTMLAttributes } from 'react'

import classNames from 'classnames'

type ContainerProps = HTMLAttributes<HTMLDivElement>

export const Container = ({ className, ...rest }: ContainerProps) => {
  return <div className={classNames('container mx-auto max-w-screen-lg', className)} {...rest} />
}
