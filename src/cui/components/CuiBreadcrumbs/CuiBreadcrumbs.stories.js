import React from 'react'
import CuiBreadcrumb from '../CuiBreadcrumb/CuiBreadcrumb'

import CuiBreadcrumbs from './CuiBreadcrumbs'

export default {
  title: 'Cui / CuiBreadcrumbs',
  component: CuiBreadcrumbs,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['dark', 'light']
      },
      defaultValue: 'dark'
    }
  }
}

const items = [
  {label: 'Membership Plans', id: 1},
  {label: 'Meals', id: 2},
  {label: 'Checkout', id: 2}
]
const Template = args => (
  <CuiBreadcrumbs {...args}>
    {items.map(item => (
      <CuiBreadcrumb key={item.id}>{item.label}</CuiBreadcrumb>
    ))}
  </CuiBreadcrumbs>
)

export const Default = Template.bind({})
Default.args = {}
