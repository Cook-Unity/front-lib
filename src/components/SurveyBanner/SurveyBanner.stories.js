import React from 'react'

import SurveyBanner from './index'
import mobileAndTabletCheck from '../../utils/mobileAndTabletCheck'

const isMobileDevice = () => mobileAndTabletCheck()

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
