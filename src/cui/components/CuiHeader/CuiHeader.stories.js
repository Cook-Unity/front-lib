import React from 'react'

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


const FunnelBreadcrumbs = <div>Breadcrumbs</div>
export const Funnel = Template.bind({})
Funnel.args = {
  color: 'dark',
  showMenu: true,
  showLogin: false,
  showNeedHelp: true,
  center: FunnelBreadcrumbs
}

const SubscriptionItems = <div>Items</div>
export const Subscription = Template.bind({})
Subscription.args = {
  color: 'dark',
  showMenu: true,
  showLogin: false,
  showNeedHelp: true,
  center: SubscriptionItems
}