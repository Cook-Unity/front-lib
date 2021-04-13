import React from 'react'
import OrderButtons from './OrderButtons'

import {meal as mealDetail} from './__mock__.json'

export default {
  title: 'OrderButtons',
  component: OrderButtons
}

const Template = args => <OrderButtons {...args} />

export const Add = Template.bind({})

export const Added = Template.bind({})
Added.args = {
  qtyOrdered: 2,
  mealDetail,
  removeProduct: () => {
    console.log('removeProduct')
  },
  addProduct: () => {
    console.log('addProduct')
  },
  qtyTotal: 10
}

export const NoMore = Template.bind({})
NoMore.args = {
  qtyOrdered: 2,
  mealDetail,
  removeProduct: () => {
    console.log('removeProduct')
  },
  addProduct: () => {
    console.log('addProduct')
  },
  qtyTotal: 2
}
