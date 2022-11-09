import React from 'react'
import Breaker from './Breaker'
import {breaker_basic} from './__mock__'

export default {
  title: 'Breaker',
  component: Breaker
}

const Template = args => {
  return <Breaker {...args} />
}

export const Default = Template.bind({})
Default.args = {
  ...breaker_basic
}
