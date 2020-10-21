import React from 'react';

import FinalSteps from './index';

export default {
  title: 'FinalSteps',
  component: FinalSteps
};

const Template = (args) => <FinalSteps {...args} />;

export const Default = Template.bind({});
Default.args = {
  mealDetail: {
    cookingSteps: {
      microwave_steps: "1. Remove sleeve and cups and peel corner of film to vent. 2. Microwave for 2-4 mins. 3. Remove film, add cheese and crumbs",
      oven_steps: "1. Preheat to 350F. 2. Remove sleeve, film & cups. 3. Heat up for 15-20 mins. 4. Pour cheese and crumbs on top"
    }
  }
};
