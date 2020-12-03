import React from 'react'
import clsx from 'clsx'
import styles from '../css/highlight.module.css'
import { Color } from '../types/general'

interface Props {
  children: React.ReactNode
  variant?: Color
  color?: string
  style?: Record<string, string>
}

export const Highlight: React.FC<Props> = ({
  children,
  variant,
  color,
  style = {}
}: Props) => (
  <span
    className={clsx(styles.general, styles[variant])}
    style={{
      backgroundColor: color,
      ...style
    }}
  >
    {children}
  </span>
)
