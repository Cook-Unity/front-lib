import React, {useState} from 'react'
import MealCard from './MealCard'

export const MealCardSimple = ({quantity: startQuantity = 0, ...props}) => {
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
    <MealCard {...{...props, onAddItem, onRemoveItem, onClick, quantity}} />
  )
}
