import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../common/Buttons'
import styles from './OrderButtons.module.scss'

const OrderButtons = ({
  qtyOrdered,
  qtyTotal,
  mealDetail,
  removeProduct,
  addProduct
}) => {
  const minusEnabled = qtyOrdered > 0
  const plusEnabled = qtyOrdered < qtyTotal && qtyTotal !== 0

  return (
    <section className={styles.mealFooter}>
      {qtyOrdered > 0 ? (
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.mealButton} ${styles.minus}`}
              onClick={() => minusEnabled && removeProduct(mealDetail)}
            />
          </div>

          <div className={styles.orderContainer}>{qtyOrdered}</div>

          <div className={styles.buttonContainer}>
            <button
              className={`${styles.mealButton} ${styles.plus}`}
              onClick={() => plusEnabled && addProduct(mealDetail)}
              disabled={!plusEnabled}
            />
          </div>
        </div>
      ) : (
        <Button
          dark
          onClick={() =>
            (qtyOrdered < qtyTotal || qtyTotal !== 0) && addProduct(mealDetail)
          }
        >
          <div>Add meal</div>
        </Button>
      )}
    </section>
  )
}

OrderButtons.propTypes = {
  qtyOrdered: PropTypes.number,
  qtyTotal: PropTypes.number,
  mealDetail: PropTypes.object.isRequired,
  removeProduct: PropTypes.func,
  addProduct: PropTypes.func
}

OrderButtons.defaultProps = {
  qtyOrdered: 0,
  qtyTotal: 0,
  mealDetail: {},
  removeProduct: () => {},
  addProduct: () => {}
}

export default OrderButtons
