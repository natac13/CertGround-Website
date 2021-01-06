import React from 'react'
import styles from '../css/videoWrapper.module.css'

interface Props {
  children: React.ReactNode
  aspectRatio: number
}

const VideoWrapper: React.FC<Props> = ({ aspectRatio, children }: Props) => {
  return (
    <div
      className={styles.videoWrapper}
      style={{ '--aspect-ratio': aspectRatio }}
    >
      {children}
    </div>
  )
}

export default VideoWrapper
