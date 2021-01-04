import clsx from 'clsx'
import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

interface Props {
  imageUrl?: string
  title: string
  description: React.ReactElement
  icon?: React.ReactNode
}

export const Feature: React.FC<Props> = ({
  imageUrl,
  title,
  description,
  icon,
}: Props) => {
  const imgUrl = useBaseUrl(imageUrl)
  const Icon = icon
  return (
    <div className="max-w-prose justify-items-center grid grid-cols-1 gap-5">
      <div className="flex items-start w-36 h-36">
        {icon ? (
          <Icon className="w-full h-full" />
        ) : imgUrl ? (
          <img className="w-full h-full" src={imgUrl} alt={title} />
        ) : null}
      </div>
      <h3 className="self-center mb-1 text-4xl text-center">{title}</h3>
      <p className="text-lg place-self-end">{description}</p>
    </div>
  )
}
