import React from 'react'

import MealImage from './index'

export default {
  title: 'MealImage',
  component: MealImage
}

const Template = args => <MealImage {...args} />

export const Default = Template.bind({})
Default.args = {
  imageUrl:
    'https://d1ureao5dcqpo4.cloudfront.net/media/avatar/ED1_56602498751913.jpg'
}
