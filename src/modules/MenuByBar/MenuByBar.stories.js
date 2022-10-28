import React from 'react'
import data from './data.mock.json'

import MenuByBar from './index'

export default {
  title: 'MenuBy/MenuByBar',
  component: MenuByBar,
  argTypes: {
    setMenuSelected: {action: 'setMenuSelected clicked'},
    setTabSelected: {action: 'setTabSelected clicked'}
  }
}

const Template = args => (
  <div id="storyBookRootContainer">
    <MenuByBar {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  ...data,
  menuSelected: data.menuItems[0],
  tabSelected: data.menuItems[0].tabs[0]
}

export const Scrolling = Template.bind({})
Scrolling.args = {
  ...data,
  menuSelected: data.menuItems[0],
  tabSelected: data.menuItems[0].tabs[0],
  isScrolling: true
}

export const All = Template.bind({})
All.args = {
  ...data,
  menuSelected: data.menuItems[0],
  tabSelected: data.menuItems[0].tabs[0]
}

export const Favorites = Template.bind({})
Favorites.args = {
  ...data,
  menuSelected: data.menuItems[0],
  tabSelected: data.menuItems[0].tabs[2]
}

export const Cuisines = Template.bind({})
Cuisines.args = {
  ...data,
  menuSelected: data.menuItems[1],
  tabSelected: data.menuItems[0].tabs[0]
}

export const Chef = Template.bind({})
Chef.args = {
  ...data,
  menuSelected: data.menuItems[2],
  tabSelected: data.menuItems[0].tabs[0]
}

export const Diets = Template.bind({})
Diets.args = {
  ...data,
  menuSelected: data.menuItems[3],
  tabSelected: data.menuItems[0].tabs[0]
}

export const Protein = Template.bind({})
Protein.args = {
  ...data,
  menuSelected: data.menuItems[4],
  tabSelected: data.menuItems[0].tabs[0]
}
