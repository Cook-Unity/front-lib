import React from 'react';

import Macronutrients from './index';
import {defaultProps} from '../../mocks/mock-mealDetails'

export default {
  title: 'Macronutrients',
  component: Macronutrients
};

const Template = (args) => <Macronutrients {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps
};
