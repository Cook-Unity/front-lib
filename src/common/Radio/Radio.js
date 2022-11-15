import React from 'react'
import classnames from 'classnames'
import styles from './Radio.module.scss'

const Radio = ({name, checked, onClick, children}) => {
  return (
    <div className={classnames(styles.cookunity__input_radio_container)} onClick={onClick}>
      <div
        className={classnames(styles.cookunity__input_radio, {
          [styles.checked]: checked
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
      {children}
    </div>
  )
}

export default Radio
