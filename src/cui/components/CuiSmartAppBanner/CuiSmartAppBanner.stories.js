import React from 'react'
import {fn} from '@storybook/test'

import CuiSmartAppBanner from './CuiSmartAppBanner'

export default {
  title: 'CuiSmartAppBanner',
  component: CuiSmartAppBanner,
  args: {
    handleOnClick: fn(),
    handleOnClickClose: fn()
  }
}

const Template = args => <CuiSmartAppBanner {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'CookUnity iOS App',
  subTitle: 'Eat well without effort',
  textButton: 'Use'
}
