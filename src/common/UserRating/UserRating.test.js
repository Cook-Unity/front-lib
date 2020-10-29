import * as React from 'react';
import { render } from '@testing-library/react';

import defaultPropsMock from "../../mocks/mealdetail.json";
import UserRating from './UserRating';

const user_rating = defaultPropsMock.mealDetail.user_rating

const defaultProps = {
  user_rating,
};

describe('UserRating component', () => {

  describe('Checking user rating', () => {

    it(`Check than ${defaultProps.user_rating} is contain in the component`, () => {
      const renderResult = render(
        <UserRating
          {...defaultProps}
        />
      );

      expect(renderResult.getByTestId('user-rating').textContent).toBe(defaultProps.user_rating.toString());
    });
  });
});