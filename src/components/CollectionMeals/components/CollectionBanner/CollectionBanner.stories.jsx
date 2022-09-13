import React from 'react'
import CollectionBanner from './CollectionBanner'

export default {
  title: 'CollectionMeals/CollectionBanner',
  component: CollectionBanner
}

const Template = args => <CollectionBanner {...args} />

export const Default = Template.bind({})
Default.args = {
  isNew: true,
  title: 'Create your own perfect meal',
  image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/popular-picks-1.jpg'
}
