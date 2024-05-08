import React from 'react'
import {fn} from '@storybook/test'
import DropdownMenuExperiment from './DropdownMenu'
import data from './__mock__.json'

export default {
  title: 'Cui / modules / DropdownMenuExperiment',
  component: DropdownMenuExperiment,
  args: {
    handleOnClick: fn(),
    handleClose: fn()
  }
}

const Template = args => <DropdownMenuExperiment {...args} />

export const Default = Template.bind({})
Default.args = {
  menuItems: data,
  menuSelected: data[0]
}
