import React from 'react';

import Ingredients from './index';
import {defaultProps} from '../../mocks/mock-mealDetails'

export default {
  title: 'Ingredients',
  component: Ingredients
};

const Template = (args) => <Ingredients  {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
  ingredients: defaultProps.mealDetail.ingredients
};
