import React from 'react'

import StarReview from './index'

export default {
  title: 'StarReview',
  component: StarReview
}

const Template = args => <StarReview {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'rate',
  starCount: 5,
  value: 3.5,
  editing: false
}
