import React from 'react'
import IngredientsModal from './'

import ingredient from './data.mock'

export default {
  title: 'IngredientsModal',
  component: IngredientsModal
}

const Template = args => (
  <div id="root" style={{height: '300px'}}>
    <IngredientsModal {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  selectedIngredient: ingredient,
  isOpen: true
}
