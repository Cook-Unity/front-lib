import React from 'react';
import { defaultProps } from '../../mocks/mock-mealDetails';

import ProductDescription from './index';

export default {
  title: 'ProductDescription',
  component: ProductDescription
};

const Template = (args) => <ProductDescription {...args}  />;

export const Default = Template.bind({});
Default.args = {
...defaultProps
}
