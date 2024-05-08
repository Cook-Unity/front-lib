import React from 'react'
import {fn} from '@storybook/test'

import CUButton from './index'

export default {
  title: 'CUButton',
  component: CUButton,
  args: {
    onClick: fn()
  },
  argTypes: {
    backgroundColor: {control: 'color'},
    borderColor: {control: 'color'}
  }
}

const Template = args => <CUButton {...args}>Hola</CUButton>

export const Primary = Template.bind({})
Primary.args = {
  primary: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  secondary: true
}

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}
