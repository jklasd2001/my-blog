import { ButtonHTMLAttributes, SVGProps } from 'react'

import classNames from 'classnames'

interface IconAdornmentProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

export const IconAdornment = ({ icon: Icon, className, ...rest }: IconAdornmentProps) => {
  return (
    <button
      className={classNames(
        'h-8 w-8 rounded-full p-1 hover:bg-slate-900/10 hover:dark:bg-white/10',
        className,
      )}
      {...rest}
    >
      <Icon />
    </button>
  )
}
