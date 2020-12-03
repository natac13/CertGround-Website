import clsx from 'clsx'
import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../Feature/styles.module.css'

interface Props {
  imageUrl?: string
  name: string
  website: string
}

export const Client: React.FC<Props> = ({ imageUrl, name, website }: Props) => {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col', styles.feature)}>
      <div className="text--center">
        {imgUrl && (
          <a
            href={`https://${website}`}
            className="text--center"
            target="_blank"
            title={name}
            rel="noreferrer"
          >
            <img className={styles.featureImage} src={imgUrl} alt={name} />
          </a>
        )}
      </div>
    </div>
  )
}
