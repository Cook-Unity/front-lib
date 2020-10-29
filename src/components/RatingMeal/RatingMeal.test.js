import * as React from 'react';
import { render } from '@testing-library/react';

import defaultPropsMock from "../../mocks/mealdetail.json";
import RatingMeal from './RatingMeal';

const stars = defaultPropsMock.mealDetail.stars
const reviews_count = defaultPropsMock.mealDetail.reviews_count
const mealDetail = defaultPropsMock.mealDetail

const defaultProps = {
  reviews_count,
  stars,
  mealDetail
};

describe('UserRating component', () => {

  describe('Checking user rating', () => {

    it(`Check than ${defaultProps.stars} is contain in the component`, () => {
      const renderResult = render(
        <RatingMeal
          {...defaultProps}
        />
      );

      expect(renderResult.queryAllByTestId('stars').textContent).toBe(parseFloat(+defaultProps.stars || 0).toFixed(1));
    });
  });
});