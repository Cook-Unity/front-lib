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
  {id: 1, active: true, label: 'Membership Plans'},
  {id: 2, active: true, label: 'Meals'},
  {id: 3, active: false, label: 'Checkout'}
]
const Template = args => (
  <CuiBreadcrumbs {...args}>
    {items.map((item, index) => (
      <CuiBreadcrumb
        key={item.id}
        active={item.active}
        isLast={index === items.length - 1}
      >
        {item.label}
      </CuiBreadcrumb>
    ))}
  </CuiBreadcrumbs>
)

export const Default = Template.bind({})
Default.args = {}
