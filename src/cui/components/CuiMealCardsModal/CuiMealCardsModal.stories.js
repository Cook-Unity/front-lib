import React from 'react'
import CuiMealCardsModal from './CuiMealCardsModal'

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

const MockMenuCard = () => (
  <div
    style={{
      height: 200 + 'px',
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      borderRadius: 8 + 'px'
    }}
  />
)

const Template = args => (
  <div>
    <CuiMealCardsModal {...args}>
      {Array(3)
        .fill(null)
        .map((value, index) => (
          <MockMenuCard key={index} />
        ))}
    </CuiMealCardsModal>
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
