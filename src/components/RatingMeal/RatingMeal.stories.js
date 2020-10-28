import React from 'react';
import { defaultProps } from '../../mocks/mock-mealDetails';

import RatingMeal from './index';

export default {
  title: 'RatingMeal',
  component: RatingMeal
};

const Template = (args) => <RatingMeal {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps
};
