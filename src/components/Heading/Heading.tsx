import { createElement, HTMLAttributes, useMemo } from 'react'

import classNames from 'classnames'

interface HeadingProps extends HTMLAttributes<HTMLHeadElement> {
  /**
   * Heading type
   */
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  /**
   * @optional
   * If true, 설정된 마진값이 없어집니다.
   */
  disableMargin?: boolean
}

export const Heading = ({
  type = 'h6',
  disableMargin = false,
  className,
  ...rest
}: HeadingProps) => {
  const style = useMemo(() => {
    return {
      h1: 'text-5xl font-bold mb-10',
      h2: 'text-4xl font-bold mb-9',
      h3: 'text-3xl font-semibold mb-6',
      h4: 'text-2xl font-semibold mb-2',
      h5: 'text-xl font-semibold mb-2',
      h6: 'text-lg font-semibold mb-2',
    }[type]
  }, [type])

  return createElement(type, {
    className: classNames(
      style,
      {
        'mb-0': disableMargin,
      },
      className,
    ),
    ...rest,
  })
}
