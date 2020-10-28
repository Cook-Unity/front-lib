import * as React from 'react';
import { render } from '@testing-library/react';

import defaultPropsMock from "../../mocks/mealdetail.json";
import IngredientsModal from './IngredientsModal';

const selectedIngredient = defaultPropsMock.mealDetail.ingredients[0]

const defaultProps = {
  selectedIngredient: defaultPropsMock.mealDetail.ingredients[0],
  name: selectedIngredient.name
};

describe('Specifications component',  () => {

  describe('Checking name', () => {

    it(`Check than ${defaultProps.name} is contain in the component`, () => {
      const renderResult = render(
        <IngredientsModal
          {...defaultProps}
        />
      );

      expect(renderResult.queryByText(defaultProps.name)).toBeInTheDocument();
    });
  });
});
