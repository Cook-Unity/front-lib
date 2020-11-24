import React from 'react'

import classnames from 'classnames'
import './MiniGauge.css'

const getProgress = x => {
  const progress = Math.abs(x)

  if (progress > 100) {
    return 100
  } else if (progress < 0) {
    return 0
  }

  return progress
}

const radius = 32
const center = 36
const side = 72
const strokeDasharray = 2 * Math.PI * radius

const MiniGauge = ({progress, unit, className, style}) => {
  const _progress_ = getProgress(progress)

  const strokeDashOffset = strokeDasharray * (_progress_ / 100) || 0

  return (
    <div
      className={classnames('cookunity__radial_gauge', className)}
      style={style}
    >
      <div className="label">
        <p className="progress">{`${Math.floor(_progress_) || 0}%`}</p>
        <p className="unit">{unit}</p>
      </div>
      <svg
        className="radial_gauge"
        width={side}
        height={side}
        viewBox={`0 0 ${side} ${side}`}
      >
        <circle
          className="progress-bar"
          cx={center}
          cy={center}
          r={radius}
          fill="none"
        />
        <circle
          className="track"
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashOffset}
        />
      </svg>
    </div>
  )
}

export default MiniGauge
