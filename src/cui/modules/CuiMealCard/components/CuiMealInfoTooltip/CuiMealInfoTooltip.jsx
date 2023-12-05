import React, {useState} from 'react'

import './CuiMealInfoTooltip.scss'
import images from '../../../../assets/images/images'

const CuiMealInfoTooltip = ({className, children, tooltipText, ...props}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    tooltipText && (
      <div
        className="cui-meal-actions__tooltip"
        onClick={() => setShowTooltip(showTooltip => !showTooltip)}
      >
        <img
          src={images.infoBlack}
          className="cui-meal-actions__tooltip-info"
          alt="info"
        />
        {showTooltip && <div className="content">{tooltipText}</div>}
      </div>
    )
  )
}

export default CuiMealInfoTooltip
