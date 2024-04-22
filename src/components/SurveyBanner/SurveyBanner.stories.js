import React from 'react'
import {fn} from '@storybook/test'
import SurveyBanner from './index'
import {isMobileOrTablet} from '../../utils/device'

const isMobileDevice = () => isMobileOrTablet()

export default {
  title: 'SurveyBanner',
  component: SurveyBanner,
  args: {
    handleSubmit: fn(),
    handleClose: fn()
  }
}

const Template = args => <SurveyBanner {...args} />

export const Default = Template.bind({})
Default.args = {
  showSurvey: true,
  isMobile: isMobileDevice()
}
