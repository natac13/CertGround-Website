import React from 'react'
import Icon from '@mdi/react'

interface Props {
  path: string
  size?: number
}

const IconComponent: React.FC<Props> = (props: Props) => {
  const { path, size = 1 } = props

  return <Icon size={size} path={path} className="align-text-bottom" />
}

export default IconComponent
