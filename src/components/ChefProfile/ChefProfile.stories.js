import React from 'react'
import mealDetail from '../../test/mocks/mealDetail'
import {fn} from '@storybook/test'
import ChefProfile from './index'

export default {
  title: 'ChefProfile',
  component: ChefProfile,
  args: {
    onClick: fn()
  }
}

const Template = args => <ChefProfile {...args} />

export const Default = Template.bind({})
Default.args = {
  chefId: mealDetail.chef_id,
  img: mealDetail.chef_img,
  firstname: mealDetail.chef_firstname,
  lastname: mealDetail.chef_lastname
}
