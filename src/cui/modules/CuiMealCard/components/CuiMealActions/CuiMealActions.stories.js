import React, {useState} from 'react'
import CuiMealActions from './CuiMealActions'

export default {
  title: 'Cui / Modules / CuiMealCard / Components / CuiMealActions',
  component: CuiMealActions
}

const Template = args => {
  const [quantity, setQuantity] = useState(args.quantity)

  const handleAdd = (meal, index) => {
    setQuantity(prevQuantity => prevQuantity + 1)
    console.log(`Added meal: ${meal}, index: ${index}`)
  }

  const handleRemove = (meal, index) => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0))
    console.log(`Removed meal: ${meal}, index: ${index}`)
  }

  return (
    <CuiMealActions
      {...args}
      quantity={quantity}
      add={handleAdd}
      remove={handleRemove}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  priceText: 'Add extra for $19.99',
  strikethroughPrice: '$30.99',
  tooltipText: 'This is a sample tooltip text.',
  reachedPlanSize: false,
  isEditable: true,
  meal: {stock: 10}, // Example meal object
  quantity: 0,
  color: 'dark',
  fill: 'outline'
}

export const NutritionalModalVersion = Template.bind({})
NutritionalModalVersion.args = {
  priceText: 'Add meal for $19.99',
  strikethroughPrice: '$30.99',
  tooltipText: 'This is a sample tooltip text.',
  reachedPlanSize: false,
  isEditable: true,
  meal: {stock: 5}, // Example meal object
  quantity: 1,
  color: 'primary',
  fill: 'solid'
}
