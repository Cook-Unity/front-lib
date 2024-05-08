import React from 'react'
import {fn} from '@storybook/test'

import CuiIcon from '../CuiIcon/CuiIcon'
import {CuiIconNames} from '../CuiIcon/icons'

import CuiButton from './CuiButton'

export default {
  title: 'Cui / Components / CuiButton',
  component: CuiButton,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'dark', 'light']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    fill: {
      control: 'select',
      options: ['clear', 'outline', 'solid']
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    },
    icon: {
      ...CuiIconNames
    }
  },
  args: {
    color: 'primary',
    size: 'medium',
    fill: 'solid',
    type: 'button',
    disabled: false,
    loading: false,
    icon: null,
    onClick: fn()
  }
}

const DefaultTemplate = args => (
  <CuiButton {...args}>
    {args.icon && <CuiIcon name={args.icon} />}
    Button
  </CuiButton>
)

export const Default = DefaultTemplate.bind({})
