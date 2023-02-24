import React from 'react'

import DropdownMenuExperiment from './DropdownMenu'
import data from './__mock__.json'

export default {
  title: 'Cui / modules / DropdownMenuExperiment',
  component: DropdownMenuExperiment
}

const Template = args => <DropdownMenuExperiment {...args} />

export const Default = Template.bind({})
Default.args = {
  menuItems: data,
  menuSelected: data[0],
  handleOnClick: () => {
    console.log('Item click')
  },
  handleClose: () => {
    console.log('Button close click')
  }
}
