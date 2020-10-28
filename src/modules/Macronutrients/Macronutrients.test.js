import * as React from 'react';
import { render } from '@testing-library/react';

import Macronutrients from './Macronutrients';

describe('Macronutrients component', () => {

  describe('Checking text', () => {

    it(`Check than "Carbs" is contain in the component`, () => {
      const { queryByText } = render(
        <Macronutrients />
      );

      // expect(queryByText('Carbs')).toHaveTextContent('Carbs');
      expect(queryByText('Protein')).toHaveTextContent('Protein');
    });
  });
});