import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'outlined' | 'filled'
}

const Button: React.FC<Props> = ({
  children,
  variant = 'outlined',
  ...rest
}: Props) => {
  let buttonClass = ''
  if (variant === 'filled') {
    buttonClass =
      'rounded bg-primary  hover:bg-primary-light border-none uppercase text-primary-contrast py-2 px-4'
  } else {
    buttonClass =
      'rounded bg-background uppercase text-primary border-opacity-70 hover:border-opacity-100 border-blue-500 hover:bg-opacity-10 hover:bg-blue-500 border-2 border-solid py-2 px-4'
  }
  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  )
}

export default Button
