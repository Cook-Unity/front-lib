import React from 'react'
import CuiBreadcrumb from '../CuiBreadcrumb/CuiBreadcrumb'

import CuiBreadcrumbs from './CuiBreadcrumbs'

export default {
  title: 'Cui / Components / CuiBreadcrumbs',
  component: CuiBreadcrumbs,
  argTypes: {
    color: {
      control: 'select',
      options: ['dark', 'light']
    }
  },
  args: {
    color: 'dark'
  }
}

const items = [
  {id: 1, active: true, underline: false, label: 'Membership Plans'},
  {id: 2, active: true, underline: true, label: 'Meals'},
  {id: 3, active: false, underline: false, label: 'Checkout'}
]
const Template = args => (
  <CuiBreadcrumbs {...args}>
    {items.map((item, index) => (
      <CuiBreadcrumb
        key={item.id}
        active={item.active}
        isLast={index === items.length - 1}
        underline={item.underline}
      >
        {item.label}
      </CuiBreadcrumb>
    ))}
  </CuiBreadcrumbs>
)

export const Default = Template.bind({})
