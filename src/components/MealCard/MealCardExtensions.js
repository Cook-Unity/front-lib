import React, {useState} from 'react'
import MealCard from './MealCard'

export const MealCardSimple = ({quantity: startQuantity = 0, ...props}) => {
  const [quantity, setQuantity] = useState(startQuantity)

  const onAddItem = () => {
    // console.log('item added')
    setQuantity(quantity + 1)
  }
  const onRemoveItem = () => {
    // console.log('item removed')
    setQuantity(quantity - 1)
  }
  const onClick = () => {
    // console.log('meal card clicked')
    props.onClick && props.onClick()
  }

  return (
    <MealCard {...{...props, onAddItem, onRemoveItem, onClick, quantity}} />
  )
}
