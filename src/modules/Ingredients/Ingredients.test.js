import * as React from 'react';
import { render } from '@testing-library/react';

import defaultPropsMock from '../../mocks/mealdetail.json';
import Ingredients from './Ingredients';

const ingredient = defaultPropsMock.mealDetail.ingredients.map((ingredient) => ingredient)

const defaultProps = {
  ingredient,
};

describe('Ingredients component', () => {
  describe('Checking ingredient name', () => {
    it(`Check than title is contain in the component`, () => {
      const renderResult = render(
        <div id="root">
          <Ingredients {...defaultProps} />
        </div>
      );     
      expect(renderResult.queryByAltText('Ingredients')).toBeInTheDocument()
    });
  });
});
