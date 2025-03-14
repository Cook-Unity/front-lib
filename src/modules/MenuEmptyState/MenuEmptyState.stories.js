import React from 'react'
import {fn} from '@storybook/test'
import props from './data.mock.json'

import MenuEmptyState from './index'

export default {
  title: 'MenuBy/MenuEmptyState',
  component: MenuEmptyState,
  args: {
    handleButtonClick: fn()
  }
}

const Template = args => (
  <div id="storyBookRootContainer">
    <MenuEmptyState {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  ...props
}

export const Favorite = Template.bind({})
Favorite.args = {
  ...props,
  isFavorite: true
}

export const TopRated = Template.bind({})
TopRated.args = {
  ...props,
  isTopRated: true
}
