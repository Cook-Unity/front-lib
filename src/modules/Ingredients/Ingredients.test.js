import * as React from 'react';
import { render } from '@testing-library/react';

import { defaultProps } from './data.mock';
import Ingredients, { getIngredientNameValue } from './Ingredients';

describe('Ingredients component', () => {
  describe('Checking ingredient name', () => {
    it(`Check than title is contain in the component`, () => {
      const renderResult = render(
        <div id='root'>
          <Ingredients {...defaultProps} />
        </div>
      );

      defaultProps.ingredients.forEach((ingredient) => {
        expect(
          renderResult.getByText(getIngredientNameValue(ingredient))
        ).toBeInTheDocument();
      });
    });
  });
});
