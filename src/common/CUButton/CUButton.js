import React from 'react'
import PropTypes from 'prop-types'
import './CUButton.css'

/**
 * Primary UI component for user interaction
 */
const CUButton = ({
  primary,
  backgroundColor,
  borderColor,
  size,
  label,
  children,
  ...props
}) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary'
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{
        backgroundColor: backgroundColor || null,
        boxShadow: borderColor ? `${borderColor} 0px 0px 0px 1px inset` : null
      }}
      {...props}
    >
      {children}
    </button>
  )
}

CUButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What border color to use
   */
  borderColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

CUButton.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
}

export default CUButton
