import React, {useState} from 'react'

import CuiQuantitySelector from './CuiQuantitySelector'

export default {
  title: 'Cui / Components / CuiQuantitySelector',
  component: CuiQuantitySelector,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'dark', 'light', 'gold']
    },
    max: {
      control: 'number'
    },
    min: {
      control: 'number'
    },
    showBorder: {
      control: 'boolean'
    }
  },
  args: {
    color: 'light',
    min: 0,
    showBorder: false
  }
}

const Template = args => {
  const [quantity, setQuantity] = useState(0)

  const addItemHandler = () => {
    setQuantity(quantity + 1)
  }
  const removeItemHandler = () => {
    setQuantity(quantity - 1)
  }

  return (
    <CuiQuantitySelector
      {...args}
      value={quantity}
      onAddItem={addItemHandler}
      onRemoveItem={removeItemHandler}
    />
  )
}

export const Default = Template.bind({})

Default.args = {
  min: 0,
  max: 4
}
