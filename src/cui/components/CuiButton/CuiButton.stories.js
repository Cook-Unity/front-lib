import React from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'

import CuiButton from './CuiButton'

export default {
  title: 'Cui / CuiButton',
  component: CuiButton,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'dark', 'light']
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

const DefaultTemplate = args => <CuiButton {...args}>Button</CuiButton>

export const Default = DefaultTemplate.bind({})
Default.args = {}

const WithIconTemplate = args => (
  <CuiButton {...args}>
    <CuiIcon name="heart" /> Button
  </CuiButton>
)
export const WithIcon = WithIconTemplate.bind({})
WithIcon.args = {}
