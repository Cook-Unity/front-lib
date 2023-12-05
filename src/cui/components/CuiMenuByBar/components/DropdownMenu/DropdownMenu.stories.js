import React from 'react'

import DropdownMenu from './index'
import data from './__mock__.json'

export default {
  title: 'Cui / Components / DropdownMenu',
  component: DropdownMenu
}

const Template = args => <DropdownMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  menuItems: data,
  handleOnClick: () => {
    console.log('Item click')
  },
  handleClose: () => {
    console.log('Button close click')
  }
}
