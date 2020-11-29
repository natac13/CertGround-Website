import React from 'react'
import clsx from 'clsx'
import style from '../css/highlight.module.css'
import { Color } from '../types/general'

interface Props {
  children: React.ReactNode
  color: Color
}

export const Highlight: React.FC<Props> = ({ children, color }: Props) => (
  <span className={clsx(style.general, style[color])}>{children}</span>
)
