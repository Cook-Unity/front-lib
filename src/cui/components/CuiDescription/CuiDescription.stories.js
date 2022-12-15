import React from 'react'

import CuiDescription from './CuiDescription'

export default {
  title: 'Cui / Components / CuiDescription',
  component: CuiDescription
}

const Template = args => <CuiDescription {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Wholesome meals with a Mexican influence',
  text: 'Chef Raymundo is a creative and passionate culinary professional with over 10 years of experience in restaurants and culinary kitchens. He worked with various restaurants in NY and one of which is Pampano. He focuses on using healthy, organic and sustainable food and ingredients. Focusing on French, Mexican and Seafood cuisines, he channels his energy with utmost committment to provide a glorious palate satisfaction.'
}
