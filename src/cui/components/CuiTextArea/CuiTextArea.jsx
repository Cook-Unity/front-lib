import classNames from 'classnames'
import React from 'react'

import './CuiTextArea.scss'

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
