import React from 'react'

import SmartAppBanner from './index'

export default {
  title: 'SmartAppBanner',
  component: SmartAppBanner
}

const Template = args => <SmartAppBanner {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'CookUnity iOS App',
  subTitle: 'Eat well without effort',
  textButton: 'Use'
}
