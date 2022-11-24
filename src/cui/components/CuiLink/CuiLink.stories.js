import React from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'

import CuiLink from './CuiLink'

export default {
  title: 'Cui / CuiLink',
  component: CuiLink,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'dark']
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




const DefaultTemplate = args => <CuiLink {...args}>Button</CuiLink>

export const Default = DefaultTemplate.bind({})
Default.args = {
  color: 'primary',
  href: 'https://cookunity.com/',
  target: '_blank'
}

const WithIconTemplate = args => (
  <CuiLink {...args}>
    <CuiIcon name="heart" /> Button
  </CuiLink>
)
export const WithIcon = WithIconTemplate.bind({})
WithIcon.args = {
  color: 'tertiary',
  href: 'https://cookunity.com/',
  target: '_blank'
}
