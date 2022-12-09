import { createElement, HTMLAttributes, ReactHTML } from 'react'

import classNames from 'classnames'

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  type?: keyof ReactHTML
}

export const Container = ({ type = 'div', className = '', ...rest }: ContainerProps) => {
  return createElement(type, {
    className: classNames('container mx-auto max-w-screen-md', className),
    ...rest,
  })
}
