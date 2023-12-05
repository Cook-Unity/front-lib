import React from 'react'

import CuiSmartAppBanner from './CuiSmartAppBanner'

export default {
  title: 'Cui / Components / CuiSmartAppBanner',
  component: CuiSmartAppBanner
}

const Template = args => <CuiSmartAppBanner {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'CookUnity iOS App',
  subTitle: 'Eat well without effort',
  textButton: 'Use'
}
