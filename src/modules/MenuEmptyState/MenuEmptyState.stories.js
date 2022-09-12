import React from 'react'
import props from './__mock__'

import MenuEmptyState from './index'

export default {
  title: 'Modules/MenuEmptyState',
  component: MenuEmptyState
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
