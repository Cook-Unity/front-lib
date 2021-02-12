import React from 'react'
import ChefInfo from './'

import {chef, celebrity_chef} from './__mock__'

export default {
  title: 'ChefInfo',
  component: ChefInfo
}

const Template = args => {
  return <ChefInfo {...args} />
}

export const Default = Template.bind({})
Default.args = {
  chef
}

export const Celebrity = Template.bind({})
Celebrity.args = {
  chef: celebrity_chef
}
