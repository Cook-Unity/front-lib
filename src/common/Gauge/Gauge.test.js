import * as React from 'react';
import { render } from '@testing-library/react';

import Gauge from './Gauge';

const defaultProps = {
  value: 'Calories'
};

describe('Stars component', () => {

  describe('Checking Stars ', () => {

    it(`Check than ${defaultProps.value} is contain in the component`, () => {
      const renderResult = render(
        <Gauge
          {...defaultProps}
        />
      );

      expect(renderResult.queryByText(defaultProps.value)).toBeInTheDocument();
    });
  });
});
