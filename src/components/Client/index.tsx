import clsx from 'clsx'
import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../Feature/styles.module.css'

interface Props {
  imageUrl?: string
  name: string
}

export const Client: React.FC<Props> = ({ imageUrl, name }: Props) => {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col', styles.feature)}>
      <div className="text--center">
        {imgUrl && (
          <img className={styles.featureImage} src={imgUrl} alt={name} />
        )}
      </div>
    </div>
  )
}
