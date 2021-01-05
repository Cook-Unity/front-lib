import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './Button.module.scss'

const Button = props => {
  const {
    children,
    dark,
    red,
    transparent,
    disabled,
    block,
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
      className={classnames(styles.cookunity__new_button, {
        [styles.dark]: dark ? styles.dark : null,
        [styles.red]: red ? styles.red : null,
        [styles.transparent]: transparent ? styles.transparent : null,
        [styles.disabled]: _disabled_ ? styles.disabled : null,
        [styles.block]: block ? styles.block : null,
        [styles.large]: large ? styles.large : null,
        [styles.gutter]: gutter ? styles.gutter : null,
        [styles.small]: small ? styles.small : null,
        [styles.loading]: small ? styles.loading : null
      })}
      style={{width, ...style}}
      {...rest}
    >
      {loading && <span className={styles.loader} />}
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
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.objectOf(PropTypes.any)
}

export default Button
