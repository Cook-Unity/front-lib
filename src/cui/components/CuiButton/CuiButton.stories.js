import React from 'react'

import CuiButton from './CuiButton'

export default {
  title: 'CuiButton',
  component: CuiButton,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary']
      },
      defaultValue: 'primary'
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      },
      defaultValue: 'medium'
    },
    fill: {
      control: {
        type: 'select',
        options: ['clear', 'outline', 'solid']
      },
      defaultValue: 'solid'
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset']
      },
      defaultValue: 'button'
    },
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    loading: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = args => <CuiButton {...args}>Button</CuiButton>

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary'
}
export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary'
}
export const Tertiary = Template.bind({})
Tertiary.args = {
  color: 'tertiary'
}
