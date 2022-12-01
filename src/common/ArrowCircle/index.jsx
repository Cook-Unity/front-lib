import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './ArrowCircle.module.scss'

const ArrowCircle = ({disabled, flip}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames({[styles.flip]: flip})}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM16.999 12.0054C16.999 12.0034 17 12.0024 17 12.0004C17 11.9822 16.9951 11.9658 16.9903 11.9495C16.9863 11.9361 16.9823 11.9228 16.981 11.9084C16.973 11.8124 16.961 11.7164 16.924 11.6264C16.9036 11.5749 16.8722 11.5314 16.8404 11.4873L16.8404 11.4873C16.8302 11.4731 16.8199 11.459 16.81 11.4444C16.7977 11.4269 16.7876 11.4083 16.7775 11.3897C16.7622 11.3616 16.7469 11.3335 16.724 11.3094L13.861 8.3094C13.479 7.9094 12.847 7.8954 12.447 8.2764C12.048 8.6574 12.033 9.2904 12.414 9.6904L13.664 11.0004H8C7.448 11.0004 7 11.4474 7 12.0004C7 12.5524 7.448 13.0004 8 13.0004H13.586L12.293 14.2934C11.902 14.6834 11.902 15.3164 12.293 15.7074C12.488 15.9024 12.744 16.0004 13 16.0004C13.256 16.0004 13.512 15.9024 13.707 15.7074L16.707 12.7074C16.798 12.6164 16.872 12.5064 16.922 12.3854C16.973 12.2644 16.998 12.1354 16.999 12.0054Z"
        fill={disabled ? '#DDDDDD' : '#231F20'}
      />
    </svg>
  )
}

ArrowCircle.propTypes = {
  disabled: PropTypes.bool,
  flip: PropTypes.bool
}

ArrowCircle.defaultProps = {
  disabled: false,
  flip: false
}

export default ArrowCircle
