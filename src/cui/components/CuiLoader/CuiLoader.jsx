import classNames from 'classnames'
import React from 'react'
import './CuiLoader.scss'
import animationData from './animation/data.json'
import Lottie from 'react-lottie'

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
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
        isClickToPauseDisabled
        {...props}
      />
    </div>
  )
}

export default CuiLoader
