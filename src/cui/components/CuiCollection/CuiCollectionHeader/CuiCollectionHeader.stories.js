import React from 'react'

import CuiCollectionHeader from './CuiCollectionHeader'

const IMAGE_COLLECTION =
  'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg'

export default {
  title: 'Cui / Modules / CuiCollectionHeader',
  component: CuiCollectionHeader,
  argTypes: {
    updatedWeekly: {
      control: 'boolean'
    }
  },
  args: {
    updatedWeekly: false
  }
}

const Template = args => <CuiCollectionHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'New This Week',
  image: IMAGE_COLLECTION,
  coverImage: IMAGE_COLLECTION,
  description:
    'Every week we show you the new dishes made by our chefs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  countMeals: 8
}

export const NoCoverImage = Template.bind({})
NoCoverImage.args = {
  title: 'Popular Picks',
  image: IMAGE_COLLECTION,
  description: 'Every week we show you the new dishes made by our chefs. ',
  countMeals: 8
}

export const LongDescription = Template.bind({})
LongDescription.args = {
  title: 'Brunch and Breakfast',
  image: IMAGE_COLLECTION,
  coverImage: IMAGE_COLLECTION,
  description:
    'Every week we show you the new dishes made by our chefs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Every week we show you the new dishes made by our chefs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  countMeals: 10
}

export const UpdatedWeekly = Template.bind({})
UpdatedWeekly.args = {
  title: 'New This Week',
  image: IMAGE_COLLECTION,
  coverImage: IMAGE_COLLECTION,
  description:
    'Every week we show you the new dishes made by our chefs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  countMeals: 8,
  updatedWeekly: true
}
