import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../common/Buttons'
import styles from './OrderButtons.module.scss'

const OrderButtons = ({ordered, total, onRemove, onAdd, className}) => {
  const minusEnabled = ordered > 0
  const plusEnabled = ordered < total

  return (
    <section className={`${styles.orderButton} ${className}`}>
      {ordered > 0 ? (
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.mealButton} ${styles.minus}`}
              onClick={() => minusEnabled && onRemove()}
            />
          </div>

          <div className={styles.orderContainer}>{ordered}</div>

          <div className={styles.buttonContainer}>
            <button
              className={`${styles.mealButton} ${styles.plus}`}
              onClick={() => plusEnabled && onAdd()}
              disabled={!plusEnabled}
            />
          </div>
        </div>
      ) : (
        plusEnabled && (
          <Button dark onClick={() => onAdd()}>
            Add meal
          </Button>
        )
      )}
    </section>
  )
}

OrderButtons.propTypes = {
  ordered: PropTypes.number,
  total: PropTypes.number,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func,
  className: PropTypes.string
}

OrderButtons.defaultProps = {
  ordered: 0,
  total: 0,
  onRemove: () => {},
  onAdd: () => {},
  className: null
}

export default OrderButtons
