import React from 'react'
import data from './__mock__'

import MenuByBar from './index'

export default {
  title: 'MenuBy/MenuByBar',
  component: MenuByBar
}

const Template = args => (
  <div id="storyBookRootContainer">
    <MenuByBar {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  ...data
}
