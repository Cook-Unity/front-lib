import React from 'react'
import MealCard from './'
import {MealCardSimple} from './MealCardExtensions'

export default {
  title: 'MealCard (New)',
  component: MealCard
}

const Template = args => {
  return <MealCardSimple {...args} />
}

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
  premium_fee: 3,
  full_path_meal_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/catalog/product/cache/x600/w/a/wayan-eggplant.jpeg',
  full_path_chef_image:
    'https://d1ureao5dcqpo4.cloudfront.net/media/avatar/chef-1x169283.jpg',
  feature: {
    name: 'NEW_MEAL',
    description: 'NEW',
    background: '#4D4D4F',
    color: '#FFFFFF'
  },
  stock: 3,
  specifications_detail: [
    {
      label: 'Dairy Free',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'Gluten Free',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'High Fat',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'High Protein',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'Nuts Free',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'Spicy',
      __typename: 'SpecificationsDetails'
    },
    {
      label: 'Super Foods',
      __typename: 'SpecificationsDetails'
    }
  ]
}

export const Default = Template.bind({})
Default.args = {
  meal,
  quantity: 0
}

export const Selected = Template.bind({})
Selected.args = {
  meal,
  quantity: 1
}

export const NoExtraFee = Template.bind({})
NoExtraFee.args = {
  meal,
  quantity: 1,
  noExtraFee: true
}

export const Christmas = Template.bind({})
Christmas.args = {
  meal: {
    ...meal,
    feature: {
      name: 'christmas',
      description: 'Christmas',
      background: '#CC231E',
      color: 'white'
    }
  },
  quantity: 0
}

export const FixedPrice = Template.bind({})
FixedPrice.args = {
  meal: {
    ...meal,
    fixed_price: true
  },
  quantity: 0
}

export const NoEditable = Template.bind({})
NoEditable.args = {
  meal,
  isEditable: false
}

export const DisableAddItem = Template.bind({})
DisableAddItem.args = {
  meal,
  quantity: 1,
  disableAddItem: true
}
