import * as React from 'react';
import { render } from '@testing-library/react';

import defaultPropsMock from "./__mock__.json";
import ProductTitle from './ProductTitle';

const defaultProps = {
  name: defaultPropsMock.mealDetail.name
};

describe('ProductTitle component', () => {

  describe('Checking texts', () => {

    it(`Check than ${defaultProps.name} is contain in the component`, () => {
      const renderResult = render(
        <ProductTitle
          {...defaultProps}
        />
      );

      expect(renderResult.queryByText(defaultProps.name)).toBeInTheDocument();
    });
  });
});