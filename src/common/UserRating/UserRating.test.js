import * as React from 'react';
import { render } from '@testing-library/react';

import defaultPropsMock from "../../mocks/mealdetail.json";
import UserRating from './UserRating';

const defaultProps = {
  user_rating: defaultPropsMock.mealDetail.user_rating
};

describe('UserRating component', () => {

  describe('Checking user rating', () => {

    it(`Check than ${defaultProps.user_rating} is contain in the component`, () => {
      const renderResult = render(
        <UserRating
          {...defaultProps}
        />
      );

      expect(renderResult.queryByText(defaultProps.user_rating)).toBeInTheDocument();
    });
  });
});