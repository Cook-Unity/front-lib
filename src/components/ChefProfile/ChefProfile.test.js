import * as React from 'react';
import { render } from '@testing-library/react';

import defaultPropsMock from "../../mocks/mealdetail.json";
import ChefProfile from './ChefProfile';

const defaultProps = {
  firstname: defaultPropsMock.mealDetail.chef_firstname,
  lastname: defaultPropsMock.mealDetail.chef_lastname
};


describe('ChefProfile component', () => {

  describe('Checking chef name', () => {

    it(`Check than ${defaultProps.firstname} and  ${defaultProps.lastname} is contain in the component`, () => {
      const renderResult = render(
        <ChefProfile
          {...defaultProps}
        />
      );

      expect(renderResult.queryByText(defaultProps.firstname)).toBeInTheDocument();
      expect(renderResult.queryByText(defaultProps.lastname)).toBeInTheDocument();
    });
  });
});