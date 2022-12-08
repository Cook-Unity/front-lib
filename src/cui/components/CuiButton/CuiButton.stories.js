import React from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'
import { CuiIconNames } from '../CuiIcon/icons'

import CuiButton from './CuiButton'

export default {
  title: 'Cui / Components / CuiButton',
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
    },
    icon: {
      ...CuiIconNames,
      defaultValue: null
    }
  }
}

const DefaultTemplate = args => (
  <CuiButton {...args}>
    {args.icon && <CuiIcon name={args.icon} />}
    Button
  </CuiButton>
)

export const Default = DefaultTemplate.bind({})
