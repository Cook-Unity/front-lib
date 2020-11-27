import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './Button.scss'

const Button = props => {
  const {
    children,
    dark,
    red,
    transparent,
    disabled,
    block,
    className,
    width,
    style,
    small,
    gutter,
    large,
    loading,
    ...rest
  } = props

  const _disabled_ = disabled || loading
  return (
    <button
      disabled={_disabled_}
      className={classnames(
        'cookunity__new_button',
        {
          dark,
          red,
          transparent,
          disabled: _disabled_,
          block,
          large,
          gutter,
          small,
          loading
        },
        className
      )}
      style={{ width, ...style }}
      {...rest}>
      {loading && <span className="loader"></span>}
      {children}
    </button>
  )
}

Button.defaultProps = {
  style: {},
  width: ''
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  dark: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.objectOf(PropTypes.any)
}

export default Button
