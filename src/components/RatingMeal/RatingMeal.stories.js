import React from 'react';

import RatingMeal from './index';

export default {
  title: 'RatingMeal',
  component: RatingMeal
};

const Template = (args) => <RatingMeal {...args} />;

export const Default = Template.bind({});
Default.args = {
  mealDetail: {
    user_rating: 5,
    stars: 3,
    reviews_count: 300
  }
};
