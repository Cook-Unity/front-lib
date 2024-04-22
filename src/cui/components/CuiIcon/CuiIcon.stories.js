import React from 'react'
import {fn} from '@storybook/test'

import CuiIcon from './CuiIcon'
import {CuiIconNames} from './icons'

export default {
  title: 'Cui / Components / CuiIcon',
  component: CuiIcon,
  argTypes: {
    name: CuiIconNames,
    role: {
      control: 'radio',
      options: ['button', 'icon']
    }
  },
  args: {
    name: 'heart',
    onClick: fn()
  }
}

const Template = args => <CuiIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'heart'
}
