import React, {useState} from 'react'
import MealCardExperiment from './MealCardExperiment'

export const MealCardCase = ({quantity: startQuantity = 0, ...props}) => {
  const [quantity, setQuantity] = useState(startQuantity)

  const onAddItem = () => {
    setQuantity(quantity + 1)
  }
  const onRemoveItem = () => {
    setQuantity(quantity - 1)
  }
  const onClick = () => {
    props.onClick && props.onClick()
  }

  return (
    <MealCardExperiment
      {...{...props, onAddItem, onRemoveItem, onClick, quantity}}
    />
  )
}
