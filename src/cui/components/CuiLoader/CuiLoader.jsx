import classNames from 'classnames'
import React from 'react'
import Lottie from 'lottie-react'

import animationData from './animation/data.json'
import './CuiLoader.scss'

const CuiLoader = ({fullscreen, className, ...props}) => {
  return (
    <div
      className={classNames(
        'cui-loader',
        fullscreen && 'cui-loader-fullscreen',
        className
      )}
    >
      <Lottie
        loop
        autoplay
        animationData={animationData}
        rendererSettings={{
          preserveAspectRatio: 'xMidYMid slice'
        }}
        isClickToPauseDisabled
        {...props}
      />
    </div>
  )
}

export default CuiLoader
