import classNames from 'classnames'
import React from 'react'

import './CuiTextArea.scss'

// name
// value
// onChange
// placeholder

const CuiTextArea = ({disabled = false, className, ...props}) => {
  return (
    <textarea
      className={classNames(
        'cui-textarea',
        disabled && `cui-textarea-disabled`,
        className
      )}
      {...props}
    />
  )
}

export default CuiTextArea
