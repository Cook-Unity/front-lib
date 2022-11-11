import React from 'react'
import MealCardsModal from './MealCardsModal'
import MealImage from '../../common/MealImage'

import props from './data.mock.js'

export default {
  title: 'modules/MealCardsModal',
  component: MealCardsModal,
  argTypes: {
    primaryButtonClick: {action: 'primaryButtonClick clicked'},
    secondaryButtonClick: {action: 'secondaryButtonClick clicked'},
    handleClose: {action: 'handleClose clicked'}
  }
}

const Template = args => (
  <div>
    <MealImage {...args} /> <MealCardsModal {...args} />
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

export const Mobile = Template.bind({})
Mobile.args = {
  ...props,
  primaryButtonText: 'See All Sauces',
  isOpen: true
}
