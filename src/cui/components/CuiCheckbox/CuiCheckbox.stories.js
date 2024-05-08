import React from 'react'
import {action} from '@storybook/addon-actions'

import CuiCheckbox from './CuiCheckbox'

export default {
  title: 'Cui / Components / CuiCheckbox',
  component: CuiCheckbox,
  args: {
    id: 'id',
    name: 'name',
    value: 'value'
  },
  argTypes: {
    onChange: {action: 'onChange'},
    checked: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    className: {
      control: 'text'
    },
    children: {
      control: 'text'
    }
  }
}

const Template = args => <CuiCheckbox {...args} />

export const Default = Template.bind({})
Default.args = {
  onChange: action('onChange'),
  children: 'CuiCheckbox'
}
