import React, {useState} from 'react'
import CuiBreadcrumb from '../CuiBreadcrumb/CuiBreadcrumb'
import CuiBreadcrumbs from '../CuiBreadcrumbs/CuiBreadcrumbs'
import CuiFabButton from '../CuiFabButton/CuiFabButton'
import CuiSegment from '../CuiSegment/CuiSegment'
import CuiSegmentButton from '../CuiSegmentButton/CuiSegmentButton'
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
    showLogo: {
      control: 'boolean',
      defaultValue: true
    },
    showMenu: {
      control: 'boolean',
      defaultValue: false
    },
    showNeedHelp: {
      control: 'boolean',
      defaultValue: false
    },
    showNeedHelpTitle: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const Template = args => <CuiHeader {...args} />

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
  {label: 'Checkout', id: 3}
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

const subscriptionItems = [
  {label: 'Orders', value: 1},
  {label: 'Preferences', value: 2},
  {label: 'Past Deliveries', value: 3},
  {label: 'FAQs', value: 4},
  {label: 'Messages', value: 5}
]

const SubscriptionMenu = () => {
  const [activeButton, setActiveButton] = useState(1)

  return (
    <CuiSegment color="light">
      {subscriptionItems.map(item => (
        <CuiSegmentButton
          key={item.value}
          active={activeButton === item.value}
          onClick={() => setActiveButton(item.value)}
        >
          {item.label}
        </CuiSegmentButton>
      ))}
    </CuiSegment>
  )
}

const SubscriptionEndSecondary = <CuiFabButton>AS</CuiFabButton>

const TemplateSubscription = args => <CuiHeader {...args} />
export const Subscription = TemplateSubscription.bind({})
Subscription.args = {
  color: 'dark',
  showMenu: true,
  showLogin: false,
  showNeedHelp: false,
  showAllyButton: true,
  endPrimary: <SubscriptionMenu />,
  endSecondary: SubscriptionEndSecondary
}
