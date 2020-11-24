import React from 'react'
import {defaultProps} from '../../mocks/mock-mealDetails'

import ChefProfile from './index'

export default {
  title: 'ChefProfile',
  component: ChefProfile
}

const Template = args => <ChefProfile {...args} />

export const Default = Template.bind({})
Default.args = {
  ...defaultProps,
  chef_img: defaultProps.mealDetail.chef_img,
  chef_firstname: defaultProps.mealDetail.chef_firstname,
  chef_lastname: defaultProps.mealDetail.chef_lastname
}
