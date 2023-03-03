import React from 'react'

import SurveyBanner from './index'
import {isMobileOrTablet} from '../../utils/device'

const isMobileDevice = () => isMobileOrTablet()

const props = {
  showSurvey: true,
  handleSubmit: (score, comments) => {
    console.log({score, comments})
  },
  handleClose: () => {
    console.log('close')
  }
}

export default {
  title: 'SurveyBanner',
  component: SurveyBanner
}

const Template = args => <SurveyBanner {...args} />

export const Default = Template.bind({})
Default.args = {
  ...props,
  isMobile: isMobileDevice()
}
