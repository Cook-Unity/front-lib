import React from 'react';

import ProductDescription from './index';

export default {
  title: 'ProductDescription',
  component: ProductDescription
};

const Template = (args) => <ProductDescription {...args}  />;

export const Default = Template.bind({});
Default.args = {
  meal_story: 'If an Italian meal is what you are looking for, you have found it! Baked Rigatoni with red sauce and whipped ricotta topped with basil pesto and toasted Italian bread crumbs.'
};
