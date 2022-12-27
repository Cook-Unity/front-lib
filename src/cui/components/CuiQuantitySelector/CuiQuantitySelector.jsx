import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react'
import CuiFabButton from '../CuiFabButton/CuiFabButton'
import CuiIcon from '../CuiIcon/CuiIcon'
import './CuiQuantitySelector.scss'

const CuiQuantitySelector = ({
  className,
  color = 'light',
  min,
  max,
  onAddItem,
  onRemoveItem,
  showBorder,
  value,
  ...props
}) => {
  const [quantity, setQuantity] = useState(value)

  useEffect(() => {
    setQuantity(value)
  }, [value])

  const handleAddItem = event => {
    event.currentTarget.blur()
    onAddItem(quantity + 1)
  }
  const handleRemoveItem = event => {
    event.currentTarget.blur()
    onRemoveItem(quantity - 1)
  }

  return (
    <div
      className={classNames(
        'cui-quantity-selector',
        `cui-quantity-selector-${color}`,
        showBorder && `cui-quantity-selector-${color}-border`,
        className
      )}
      {...props}
    >
      <CuiFabButton
        color={color}
        onClick={handleRemoveItem}
        disabled={min >= quantity}
      >
        <CuiIcon name="minus" />
      </CuiFabButton>
      <span>{quantity}</span>
      <CuiFabButton
        color={color}
        onClick={handleAddItem}
        disabled={max <= quantity}
      >
        <CuiIcon name="plus" />
      </CuiFabButton>
    </div>
  )
}

CuiQuantitySelector.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
  showBorder: PropTypes.bool,
  value: PropTypes.number
}

CuiQuantitySelector.defaultProps = {
  max: 0,
  min: 0,
  onAddItem: () => {},
  onRemoveItem: () => {},
  showBorder: false,
  value: 0
}

export default CuiQuantitySelector
