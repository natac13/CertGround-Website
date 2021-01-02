import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

interface Props {
  imageUrl?: string
  name: string
  website: string
}

export const Client: React.FC<Props> = ({ imageUrl, name, website }: Props) => {
  const imgUrl = useBaseUrl(imageUrl)
  if (!imgUrl) {
    return null
  }

  return (
    <a
      href={`https://${website}`}
      target="_blank"
      title={name}
      rel="noreferrer"
    >
      <img className="sm:w-55 w-60" src={imgUrl} alt={name} />
    </a>
  )
}
