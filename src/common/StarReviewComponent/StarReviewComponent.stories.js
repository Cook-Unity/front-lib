import React from 'react'

import StarReviewComponent from './index'

export default {
  title: 'StarReviewComponent',
  component: StarReviewComponent
}

const Template = args => <StarReviewComponent {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'rate',
  starCount: 5,
  value: 3.5,
  editing: false
}
