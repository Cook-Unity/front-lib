import React from 'react'
import CollectionBanner from './CollectionBanner'

export default {
  title: 'CollectionMeals/CollectionBanner',
  component: CollectionBanner
}

const Template = args => <CollectionBanner {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Customize your Meals',
  description: 'Create perfect meals with à-la-carte eats.',
  buttonText: 'Get Started',
  image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/orders/banner_desktop.png',
  isNew: true
}
