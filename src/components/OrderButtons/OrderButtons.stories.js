import React from 'react'
import OrderButtons from './OrderButtons'

export default {
  title: 'OrderButtons',
  component: OrderButtons
}

const Template = args => <OrderButtons {...args} />

export const Add = Template.bind({})
Add.args = {
  total: 2
}

export const Added = Template.bind({})
Added.args = {
  ordered: 2,
  total: 3,
  onRemove: () => {
    console.log('onRemove()')
  },
  onAdd: () => {
    console.log('onAdd()')
  }
}

export const NoMore = Template.bind({})
NoMore.args = {
  ordered: 2,
  total: 2,
  onRemove: () => {
    console.log('onRemove()')
  },
  onAdd: () => {
    console.log('onAdd()')
  }
}

export const Empty = Template.bind({})
