import React from 'react'
import ChefInfo from './'

import {chef, celebrity_chef, review} from './__mock__'

export default {
  title: 'ChefInfo',
  component: ChefInfo
}

const Template = args => {
  return <ChefInfo {...args} />
}

export const Default = Template.bind({})
Default.args = {
  chef,
  review
}

export const Celebrity = Template.bind({})
Celebrity.args = {
  chef: celebrity_chef,
  review
}
