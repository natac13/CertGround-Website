import React from 'react'
import clsx from 'clsx'
import style from '../css/highlight.module.css'
import { Color } from '../types/general'

interface Props {
  children: React.ReactNode
  variant?: Color
  color?: string
}

export const Highlight: React.FC<Props> = ({
  children,
  variant,
  color
}: Props) => (
  <span
    className={clsx(style.general, style[variant])}
    style={{
      backgroundColor: color
    }}
  >
    {children}
  </span>
)
