import React from 'react'
import mealDetail from '../../test/mocks/mealDetail'

import UserRating from './index'

export default {
  title: 'UserRating',
  component: UserRating
}

const Template = args => <UserRating {...args} />

export const Default = Template.bind({})
Default.args = {
  userRating: mealDetail.user_rating
}
