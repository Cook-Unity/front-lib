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
    'https://previews.123rf.com/images/romastudio/romastudio1603/romastudio160300203/54088672-healthy-food-background-studio-photo-of-different-fruits-and-vegetables-on-white-wooden-table-high-r.jpg'
}
