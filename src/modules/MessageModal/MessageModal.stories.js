import React from 'react'
import {fn} from '@storybook/test'

import MessageModal from '.'
import MealImage from '../../common/MealImage'

import props from './data.mock.js'

export default {
  title: 'MenuBy/MessageModal',
  component: MessageModal,
  args: {
    handleButtonClick: fn()
  }
}

const Template = args => (
  <div id="root">
    <MealImage />
    <MessageModal {...args} />
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
