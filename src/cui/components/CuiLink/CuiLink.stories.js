import React from 'react'
import CuiIcon from '../CuiIcon/CuiIcon'
import {CuiIconNames} from '../CuiIcon/icons'

import CuiLink from './CuiLink'

export default {
  title: 'Cui / Components / CuiLink',
  component: CuiLink,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'dark']
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
    icon: null
  }
}

const DefaultTemplate = args => (
  <CuiLink {...args}>
    {args.icon && <CuiIcon name={args.icon} />}
    Button
  </CuiLink>
)

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
const WithIconTemplate2 = args => (
  <CuiLink {...args}>
    Button <CuiIcon name="chevronUp" />
  </CuiLink>
)
export const WithIcon = WithIconTemplate.bind({})
WithIcon.args = {
  color: 'tertiary',
  href: 'https://cookunity.com/',
  target: '_blank'
}

export const Link = WithIconTemplate2.bind({})
Link.args = {
  showUnderline: false,
  color: 'primary',
  fill: 'outline',
  href: 'https://cookunity.com/',
  target: '_blank'
}
