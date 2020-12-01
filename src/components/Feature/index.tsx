import { Icon } from '@mdi/react'
import clsx from 'clsx'
import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

interface Props {
  imageUrl?: string
  title: string
  description: React.ReactElement
  icon?: string
}

export const Feature: React.FC<Props> = ({
  imageUrl,
  title,
  description,
  icon
}: Props) => {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--6', styles.feature)}>
      <div className="text--center">
        {icon ? (
          <Icon size={4} path={icon} />
        ) : imgUrl ? (
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        ) : null}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
