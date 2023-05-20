import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

import classNames from 'classnames'

interface IconAdornmentProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: IconType
}

export const IconAdornment = ({ icon: Icon, className, ...rest }: IconAdornmentProps) => {
  return (
    <button
      className={classNames(
        'flex h-6 w-6 items-center justify-center rounded-full p-1 hover:bg-slate-900/10 hover:dark:bg-white/10 lg:h-10 lg:w-10',
        className,
      )}
      {...rest}
    >
      <Icon size={24} />
    </button>
  )
}
