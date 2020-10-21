import React from 'react';

import ProductTitle from './index';

export default {
  title: 'ProductTitle',
  component: ProductTitle
};

const Template = (args) => <ProductTitle {...args} />;

export const Default = Template.bind({});
Default.args = {};
