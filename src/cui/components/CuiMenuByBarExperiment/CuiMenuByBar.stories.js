import React from 'react'
import data from './__mock__.json'

import MenuByBar from './CuiMenuByBar'

export default {
  title: 'Cui / modules / CuiMenuByBarExperiment',
  component: MenuByBar,
  argTypes: {
    setMenuSelected: {action: 'setMenuSelected clicked'},
    setTabSelected: {action: 'setTabSelected clicked'},
    onMenuByClick: {action: 'onMenuByClick clicked'}
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
  menuSelected: data.menuItems[0]
}

export const All = Template.bind({})
All.args = {
  ...data,
  menuSelected: data.menuItems[0]
}

export const Favorites = Template.bind({})
Favorites.args = {
  ...data,
  menuSelected: data.menuItems[0]
}

export const Cuisines = Template.bind({})
Cuisines.args = {
  ...data,
  menuSelected: data.menuItems[3],
  tabSelected: data.menuItems[3].tabs[0]
}

export const Chef = Template.bind({})
Chef.args = {
  ...data,
  menuSelected: data.menuItems[4],
  tabSelected: data.menuItems[4].tabs[0]
}

export const Diets = Template.bind({})
Diets.args = {
  ...data,
  menuSelected: data.menuItems[5],
  tabSelected: data.menuItems[5].tabs[0]
}

export const Protein = Template.bind({})
Protein.args = {
  ...data,
  menuSelected: data.menuItems[6],
  tabSelected: data.menuItems[6].tabs[0]
}

export const ScrollingAll = Template.bind({})
ScrollingAll.args = {
  ...data,
  menuSelected: data.menuItems[0],
  isScrolling: true
}

export const ScrollingChef = Template.bind({})
ScrollingChef.args = {
  ...data,
  menuSelected: data.menuItems[4],
  tabSelected: data.menuItems[4].tabs[0],
  isScrolling: true
}
