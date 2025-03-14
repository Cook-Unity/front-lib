import React from 'react'
import classnames from 'classnames'

import styles from './CuiRadio.module.scss'

const CuiRadio = ({name, checked, onClick, children, size = 'medium'}) => {
  return (
    <div
      className={classnames(styles.cookunity__input_radio_container)}
      onClick={onClick}
    >
      <div className={classnames(styles.cookunity__input_container)}>
        <div
          className={classnames(styles.cookunity__input_radio, {
            [styles.checked]: checked,
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large'
          })}
        >
          <div className={classnames(styles.checkmark)} />
        </div>
        <input
          className={classnames(styles.cookunity__input_radio)}
          type="radio"
          name={name}
          checked={checked}
        />
      </div>
      <span className={classnames(styles.cookunity__input_label)}>
        {children}
      </span>
    </div>
  )
}

export default CuiRadio
