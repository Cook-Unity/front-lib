import React from 'react';

import MealCard from './index';
import {defaultProps} from '../../mocks/mock-mealDetails'

export default {
  title: 'MealCard',
  component: MealCard
};

const Template = (args) => <MealCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps
};
