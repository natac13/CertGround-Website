import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'outlined' | 'filled'
  color?: 'warning' | 'caution' | 'normal'
}

const Button: React.FC<Props> = ({
  children,
  variant = 'outlined',
  color = 'normal',
  ...rest
}: Props) => {
  let buttonClass = ''

  if (variant === 'filled') {
    buttonClass = `rounded ${
      color === 'warning'
        ? 'bg-red-500'
        : color === 'caution'
        ? 'bg-yellow-500'
        : 'bg-primary'
    } ${
      color === 'warning'
        ? 'hover:bg-red-400'
        : color === 'caution'
        ? 'hover:bg-yellow-400'
        : 'hover:bg-primary-light'
    }  border-none uppercase text-primary-contrast py-2 px-4`
  } else {
    buttonClass = `rounded bg-background uppercase ${
      color === 'warning'
        ? 'text-red-500 border-red-500'
        : color === 'caution'
        ? 'text-yellow-500 border-yellow-500'
        : 'text-primary border-blue-500'
    } border-opacity-70 hover:border-opacity-100 hover:bg-opacity-10 ${
      color === 'warning'
        ? 'hover:bg-red-500'
        : color === 'caution'
        ? 'hover:bg-yellow-500'
        : 'hover:bg-blue-500'
    } border-2 border-solid py-2 px-4`
  }
  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  )
}

export default Button
