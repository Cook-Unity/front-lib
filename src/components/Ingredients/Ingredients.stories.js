import React from 'react';

import Ingredients from './index';

export default {
  title: 'Ingredients',
  component: Ingredients
};

const Template = (args) => <Ingredients  {...args} />;

export const Default = Template.bind({});
Default.args = {
  ingredients : [
    {
      name: "Contains Nuts"
    },
    {
      name: "Contains Nuts"
    },
  ],
  isLoading: true
};
