import React from 'react'
import './CuiSpinner.scss'

const CuiSpinner = ({className = '', ...rest}) => {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={'cui-spinner ' + className}
      {...rest}
    >
      <circle className="cui-spinner__circle" cx="25" cy="25" r="20" />
    </svg>
  )
}

export default CuiSpinner
