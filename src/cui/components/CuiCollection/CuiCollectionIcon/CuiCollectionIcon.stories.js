import React from 'react'

import CuiCollectionIcon from './CuiCollectionIcon'

export default {
  title: 'Cui / Modules / CuiCollectionIcon',
  component: CuiCollectionIcon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'large']
      },
      defaultValue: 'large'
    },
    updatedWeekly: {
      control: 'boolean',
      defaultValue: false
    }
  }
}

const IMAGE_COLLECTION =
  'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg'

const Template = args => <CuiCollectionIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'New This Week',
  image: IMAGE_COLLECTION
}

export const Small = Template.bind({})
Small.args = {
  title: 'New This Week',
  size: 'small',
  image: IMAGE_COLLECTION,
  updatedWeekly: false
}

export const SmallWithTag = Template.bind({})
SmallWithTag.args = {
  title: 'New This Week',
  size: 'small',
  image: IMAGE_COLLECTION,
  updatedWeekly: true
}

export const Large = Template.bind({})
Large.args = {
  title: 'Plant Based Asian',
  size: 'large',
  image: IMAGE_COLLECTION,
  updatedWeekly: false
}

export const LargeWithTag = Template.bind({})
LargeWithTag.args = {
  title: 'Plant Based Asian',
  size: 'large',
  image: IMAGE_COLLECTION,
  updatedWeekly: true
}
