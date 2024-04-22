import React from 'react'
import {fn} from '@storybook/test'
import OrderButtons from './OrderButtons'

export default {
  title: 'OrderButtons',
  component: OrderButtons,
  args: {
    onRemove: fn(),
    onAdd: fn()
  }
}

const Template = args => <OrderButtons {...args} />

export const Add = Template.bind({})
Add.args = {
  total: 2
}

export const Added = Template.bind({})
Added.args = {
  ordered: 2,
  total: 3
}

export const NoMore = Template.bind({})
NoMore.args = {
  ordered: 2,
  total: 2
}

export const Empty = Template.bind({})
