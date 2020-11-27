import React from 'react'
import MealCard from './MealCard'

export default {
  title: 'MealCard (New)',
  component: MealCard
}

const Template = args => <MealCard {...args} />

const meal = {
  name: 'Spicy Roasted Eggplant',
  short_description: 'with yellow rice and tomatoes',
  calories: 430,
  meat_type: 'Vegan',
  reviews: 1250,
  stars: 4.3715,
  chef_firstname: 'Jean-Georges',
  chef_lastname: 'Vongerichten',
  is_celebrity_chef: true,
  premium_fee: 3.0,
  full_path_meal_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/w/a/wayan-eggplant.jpeg',
  full_path_chef_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/avatar/chef-1x169283.jpg',
  feature: {
    name: 'NEW',
    background: '#4D4D4F',
    color: '#FFFFFF'
  },
  fixed_price: false
}

export const Default = Template.bind({})
Default.args = {
  meal,
  startQuantity: 0,
  noExtraFee: false,
  onChangeQuantity: quantity => {
    console.log('new quantity', quantity)
  },
  onClick: () => {
    console.log('meal card clicked')
  }
}

export const Selected = Template.bind({})
Selected.args = {
  meal,
  startQuantity: 1,
  noExtraFee: true
}

export const Christmas = Template.bind({})
Christmas.args = {
  meal: {
    ...meal,
    feature: {
      name: 'christmas'
    }
  },
  startQuantity: 0
}

export const FixedPrice = Template.bind({})
FixedPrice.args = {
  meal: {
    ...meal,
    fixed_price: true
  },
  startQuantity: 0
}
