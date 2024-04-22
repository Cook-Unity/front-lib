import React from 'react'
import {fn} from '@storybook/test'

import TabsMenu from './index'
import data from './data.mock.json'

export default {
  title: 'TabsMenu',
  component: TabsMenu,
  args: {
    handleOnClick: fn()
  }
}

const Template = args => <TabsMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  tabsItems: data.all,
  selectedTab: data.all[0]
}

export const Cuisines = Template.bind({})
Cuisines.args = {
  tabsItems: data.cuisines,
  selectedTab: data.cuisines[0]
}

export const Chefs = Template.bind({})
Chefs.args = {
  tabsItems: data.chefs,
  selectedTab: data.chefs[5]
}

export const IsScrolling = Template.bind({})
IsScrolling.args = {
  tabsItems: data.cuisines,
  selectedTab: data.cuisines[0],
  isScrolling: true
}
