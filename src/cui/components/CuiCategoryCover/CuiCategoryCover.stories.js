import React from 'react'

import CuiCategoryCover from './CuiCategoryCover'

const IMAGE_CATEGORY =
  'https://d1ureao5dcqpo4.cloudfront.net/media/merchandiseSets/chef-akhtar-chicken-tinga-tacos.jpg'

const IMAGE_CATEGORY_2 =
  'https://d1ureao5dcqpo4.cloudfront.net/media/cover/sides-cover.jpg'

export default {
  title: 'Cui / Modules / CuiCategoryCover',
  component: CuiCategoryCover,
  argTypes: {
    isNew: {
      control: 'boolean',
      defaultValue: false
    }
  }
}
const Template = args => <CuiCategoryCover {...args} />

export const Default = Template.bind({})
Default.args = {
  titleFirstLine: 'Build',
  titleSecondLine: 'your own feast',
  firstImage: IMAGE_CATEGORY,
  secondImage: IMAGE_CATEGORY_2,
  mobileImage: IMAGE_CATEGORY,
  subtitle:
    'Put together your perfect meal with conveniently portioned à la carte sides from your favorite chefs. Build a party spread, up your veggie game, or enjoy as snacks — there’s no wrong way to savor these dishes.'
}

export const NewLine = Template.bind({})
NewLine.args = {
  titleFirstLine: 'Channel',
  titleSecondLine: 'your inner chef',
  firstImage: IMAGE_CATEGORY,
  secondImage: IMAGE_CATEGORY_2,
  mobileImage: IMAGE_CATEGORY,
  isNew: true,
  subtitle:
    'Add these chef-curated pantry items to your meals or personal creations all week. Use them to level up homemade dishes or simply enjoy with snacks.'
}
