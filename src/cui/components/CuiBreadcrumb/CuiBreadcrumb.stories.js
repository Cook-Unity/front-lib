import React from 'react'
import {CuiIconNames} from '../CuiIcon/icons'

import CuiBreadcrumb from './CuiBreadcrumb'

export default {
  title: 'Cui / CuiBreadcrumb',
  component: CuiBreadcrumb,
  argTypes: {
    active: {
      control: 'boolean',
      defaultValue: false
    },
    icon: CuiIconNames
  }
}

const Template = args => <CuiBreadcrumb {...args}>Link</CuiBreadcrumb>

export const Default = Template.bind({})
Default.args = {}
