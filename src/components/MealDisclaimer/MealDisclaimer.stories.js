import React from 'react'
import MealDisclaimer from './'

export default {
  title: 'MealDisclaimer',
  component: MealDisclaimer
}

const Template = args => {
  return <MealDisclaimer {...args} />
}

export const Default = Template.bind({})
