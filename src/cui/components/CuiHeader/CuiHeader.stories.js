import React from 'react'
import CuiBreadcrumb from '../CuiBreadcrumb/CuiBreadcrumb'
import CuiBreadcrumbs from '../CuiBreadcrumbs/CuiBreadcrumbs'
import CuiFabButton from '../CuiFabButton/CuiFabButton'

import CuiHeader from './CuiHeader'

export default {
  title: 'Cui / CuiHeader',
  component: CuiHeader,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['dark', 'transparent']
      },
      defaultValue: 'dark'
    },
    showAllyButton: {
      control: 'boolean',
      defaultValue: false
    },
    showLogin: {
      control: 'boolean',
      defaultValue: false
    },
    showMenu: {
      control: 'boolean',
      defaultValue: false
    },
    showNeedHelp: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = args => <CuiHeader {...args}>Link</CuiHeader>

export const Default = Template.bind({})
Default.args = {
  color: 'dark'
}
export const Login = Template.bind({})
Login.args = {
  color: 'dark',
  showAllyButton: true,
  showMenu: true,
  showLogin: true
}

const items = [
  {label: 'Membership Plans', id: 1},
  {label: 'Meals', id: 2},
  {label: 'Checkout', id: 2}
]
const FunnelBreadcrumbs = (
  <CuiBreadcrumbs color="light">
    {items.map(item => (
      <CuiBreadcrumb key={item.id}>{item.label}</CuiBreadcrumb>
    ))}
  </CuiBreadcrumbs>
)

export const Funnel = Template.bind({})
Funnel.args = {
  color: 'dark',
  showMenu: true,
  showLogin: false,
  showNeedHelp: true,
  center: FunnelBreadcrumbs
}

const SubscriptionItems = <CuiFabButton>AS</CuiFabButton>
export const Subscription = Template.bind({})
Subscription.args = {
  color: 'dark',
  showMenu: true,
  showLogin: false,
  showNeedHelp: true,
  end: SubscriptionItems
}
