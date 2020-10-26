import React from 'react';
import { defaultProps } from '../../mocks/mock-mealDetails';

import UserRating from './index';

export default {
  title: 'UserRating',
  component: UserRating
};

const Template = (args) => <UserRating {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps
};
