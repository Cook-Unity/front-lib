import React from 'react'

import CuiIcon from './CuiIcon'
import {CuiIconNames} from './icons'

export default {
  title: 'Cui / Components / CuiIcon',
  component: CuiIcon,
  argTypes: {
    name: CuiIconNames,
    role: {
      control: {
        type: 'select',
        options: ['button', 'icon']
      },
      defaultValue: 'icon'
    },
    v2: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = args => <CuiIcon {...args}>Link</CuiIcon>

export const Default = Template.bind({})
Default.args = {
  name: 'heart'
}
