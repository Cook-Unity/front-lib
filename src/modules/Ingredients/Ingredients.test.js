import * as React from 'react';
import { render } from '@testing-library/react';

import defaultPropsMock from "../../mocks/mealdetail.json";
import Ingredients from './Ingredients';

const defaultProps = {
  name: defaultPropsMock.mealDetail.ingredients.map((ingredient) => ingredient.name)
};

describe('Ingredients component',  () => {

  describe('Checking ingredient name', () => {

    it(`Check than ${defaultProps.name} is contain in the component`, () => {
      const renderResult = render(
        <Ingredients
          {...defaultProps}
        />
      );

      expect(renderResult.queryByText(defaultProps.name)).toBeInTheDocument();
    });
  });
});