import React from 'react'

import CuiQuantitySelector from './CuiQuantitySelector'

export default {
  title: 'Cui / Components / CuiQuantitySelector',
  component: CuiQuantitySelector,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'dark', 'light', 'gold']
      },
      defaultValue: 'light'
    },
    max: {
      control: 'number'
    },
    min: {
      control: 'number',
      defaultValue: 0
    },
    onAddItem: {action: 'onAddItem clicked'},
    onRemoveItem: {action: 'onRemoveItem clicked'},
    showBorder: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = args => (
  <CuiQuantitySelector {...args}>Cui Tooltip</CuiQuantitySelector>
)

export const Default = Template.bind({})

Default.args = {
  min: 0,
  max: 4
}
