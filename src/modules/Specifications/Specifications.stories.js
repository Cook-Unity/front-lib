import React from 'react';

import Specifications from './index';
import {defaultProps} from '../../mocks/mock-mealDetails'

export default {
  title: 'Specifications',
  component: Specifications
};

const Template = (args) => <Specifications  {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
  specificationsDetails: defaultProps.mealDetail.specificationsDetails
};




