import React from 'react';

import ItemCard from './index';

export default {
  title: 'ItemCard',
  component: ItemCard
};

const Template = (args) => <ItemCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
