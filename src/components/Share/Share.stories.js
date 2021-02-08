import React from 'react'

import Share from './'

export default {
  title: 'Share',
  component: Share
}

const Template = args => <Share {...args} />

export const Default = Template.bind({})
Default.args = {
  url: 'https://www.cookunity.com',
  title: 'Change the way you eat'
}
