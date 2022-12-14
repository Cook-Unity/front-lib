import React from 'react'
import CuiMealCardsModal from './CuiMealCardsModal'
import MealImage from '../../../common/MealImage'

import props from './data.mock.js'

export default {
  title: 'Cui / modules / CuiMealCardsModal',
  component: CuiMealCardsModal,
  argTypes: {
    primaryButtonClick: {action: 'primaryButtonClick clicked'},
    secondaryButtonClick: {action: 'secondaryButtonClick clicked'},
    handleClose: {action: 'handleClose clicked'}
  }
}

const Template = args => (
  <div>
    <MealImage {...args} /> <CuiMealCardsModal {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  ...props,
  isOpen: true
}

export const WithCloseIcon = Template.bind({})
WithCloseIcon.args = {
  ...props,
  isOpen: true,
  withCloseIcon: true
}

export const WithMealCardExperiment = Template.bind({})
WithMealCardExperiment.args = {
  ...props,
  primaryButtonText: 'See All Sauces',
  mealCardPriceExperimentEnabled: true,
  isOpen: true
}

export const Mobile = Template.bind({})
Mobile.args = {
  ...props,
  primaryButtonText: 'See All Sauces',
  isOpen: true
}
