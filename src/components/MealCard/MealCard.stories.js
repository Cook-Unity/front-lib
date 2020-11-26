import React from 'react'
import MealCard from './MealCard'

export default {
  title: 'MealCard (New)',
  component: MealCard
}

const Template = args => <MealCard {...args} />

const SAMPLE_MEAL = {
  name: 'Spicy Roasted Eggplant',
  short_description: 'with yellow rice and tomatoes',
  calories: 430,
  meat_type: 'Vegan',
  reviews: 183,
  stars: 4.3715,
  image: 'w/a/wayan-eggplant.jpeg',
  image_path: '/media/catalog/product/cache/x600/',
  chef_firstname: 'Jean-Georges',
  chef_lastname: 'Vongerichten',
  is_celebrity_chef: true,
  bannerpic: 'chef-1x169283.jpg',
  premium_fee: 3.0,
  feature: {
    name: 'NEW',
    background: '#4D4D4F',
    color: '#FFFFFF'
  }
}

const IMAGE_URL = 'https://d1ureao5dcqpo4.cloudfront.net'
const mealImage = `${IMAGE_URL}${SAMPLE_MEAL.image_path}${SAMPLE_MEAL.image}`
const chefImage = `${IMAGE_URL}/media/avatar/${SAMPLE_MEAL.bannerpic}`

export const Default = Template.bind({})
Default.args = {
  meal: {
    ...SAMPLE_MEAL,
    full_path_meal_image: mealImage,
    full_path_chef_image: chefImage
  },
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
  meal: {
    ...SAMPLE_MEAL,
    full_path_meal_image: mealImage,
    full_path_chef_image: chefImage
  },
  startQuantity: 1,
  noExtraFee: true
}

export const Christmas = Template.bind({})
Christmas.args = {
  meal: {
    ...SAMPLE_MEAL,
    feature: {
      name: 'christmas'
    },
    full_path_meal_image: mealImage,
    full_path_chef_image: chefImage
  },
  startQuantity: 0
}
