import { LiHTMLAttributes } from 'react'

import classNames from 'classnames'

type ListItemProps = LiHTMLAttributes<HTMLLIElement>

/**
 * ListItem 컴포넌트입니다.
 *
 * @returns li
 */
export const ListItem = ({ className = '', ...rest }: ListItemProps) => {
  /**
   * @default styling
   * margin-bottom: 8px
   */
  return (
    <li
      className={classNames(
        `text-lg mb-2 last-of-type:mb-0 relative pl-5 before:content-['•'] before:text-2xl before:absolute before:left-0 before:inline-flex before:w-4 before:-top-1`,
        className,
      )}
      {...rest}
    />
  )
}
