import * as React from 'react';
import { render } from '@testing-library/react';

import Macronutrients from './Macronutrients';

import { defaultProps } from './data.mock';

describe('Macronutrients component', () => {
  describe('Checking text', () => {
    it(`Check than protein and carbs is contain in the component`, () => {
      const renderResult = render(
        <Macronutrients mealDetail={defaultProps.mealDetail} />
      );

      expect(renderResult.queryAllByTestId('title-macro').tagName).toBe(
        'Macronutrient Ratios'
      );
      expect(renderResult.queryAllByTestId('carbs').textContent).toBe('Carbs');
      expect(renderResult.queryAllByTestId('carbs').textContent).toBe('Carbs');
      expect(renderResult.queryAllByTestId('protein').textContent).toBe(
        'Protein'
      );
    });
  });
});
