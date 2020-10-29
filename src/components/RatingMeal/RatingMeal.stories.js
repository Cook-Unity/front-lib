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
  ...defaultProps,
  stars: defaultProps.mealDetail.stars,
  reviews_count: defaultProps.mealDetail.reviews_count
};
