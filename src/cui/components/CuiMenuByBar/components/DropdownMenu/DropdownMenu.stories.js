import React from 'react'
import {fn} from '@storybook/test'
import DropdownMenu from './index'
import data from './__mock__.json'

export default {
  title: 'DropdownMenu',
  component: DropdownMenu,
  args: {
    handleOnClick: fn(),
    handleClose: fn()
  }
}

const Template = args => <DropdownMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  menuItems: data
}
