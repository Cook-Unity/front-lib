import React from 'react'

import CuiItem from './CuiItem'

export default {
  title: 'Cui / Components / CuiItem',
  component: CuiItem
}

const Template = args => <CuiItem {...args}>Cui Item</CuiItem>

export const Default = Template.bind({})
