import React from 'react'

import CuiGiftCard from './CuiGiftCard'

export default {
  title: 'Cui / Components / CuiGiftCard',
  component: CuiGiftCard,
  argTypes: {
    backgroundImage: {
      control: 'text'
    },
    min: {
      control: 'number'
    },
    max: {
      control: 'number'
    }
  },
  args: {
    min: 5,
    max: 500
  }
}

const Template = args => {
  return (
    <CuiGiftCard {...args}>
      <p>GiftCard</p>
    </CuiGiftCard>
  )
}

export const Default = Template.bind()

Default.args = {
  backgroundImage:
    'https://landings-web-assets.qa.cookunity.com/assets/images/dark-home/dishes-hero.png'
}
