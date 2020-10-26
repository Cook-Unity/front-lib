import React from 'react';
import { defaultProps } from '../../mocks/mock-mealDetails';

import ChefProfile from './index';

export default {
  title: 'ChefProfile',
  component: ChefProfile
};


const Template = (args) => <ChefProfile {...args}  />;

export const Default = Template.bind({});
Default.args = {
 ...defaultProps

};
