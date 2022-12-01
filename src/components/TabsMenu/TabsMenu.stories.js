import React from 'react'

import TabsMenu from './index'
import data from './data.mock.json'

export default {
  title: 'TabsMenu',
  component: TabsMenu
}

const Template = args => <TabsMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  tabsItems: data.all,
  selectedTab: data.all[0],
  handleOnClick: () => {
    console.log('Item click')
  }
}

export const Cuisines = Template.bind({})
Cuisines.args = {
  tabsItems: data.cuisines,
  selectedTab: data.cuisines[0],
  handleOnClick: () => {
    console.log('Item click')
  }
}

export const Chefs = Template.bind({})
Chefs.args = {
  tabsItems: data.chefs,
  selectedTab: data.chefs[5],
  handleOnClick: () => {
    console.log('Item click')
  }
}

export const IsScrolling = Template.bind({})
IsScrolling.args = {
  tabsItems: data.cuisines,
  selectedTab: data.cuisines[0],
  isScrolling: true,
  handleOnClick: () => {
    console.log('Item click')
  }
}
