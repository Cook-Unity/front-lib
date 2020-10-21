import React from 'react';

import Specifications from './index';

export default {
  title: 'Specifications',
  component: Specifications
};

const Template = (args) => <Specifications  {...args} />;

export const Default = Template.bind({});
Default.args = {
  image:"http://qa.cookunity.com/skin/frontend/rwd/default/images/icons/tags/contains-nuts.svg",
  label:"Contains Nuts"
};
