import * as React from 'react';
import { render } from '@testing-library/react';

import { defaultProps } from './data.mock';
import Specifications, { replaceLessThanText } from './Specifications';

const specificationsDetails = defaultProps.specificationsDetails;
const labels = specificationsDetails.map((detail, i) =>
  replaceLessThanText(detail.label)
);

describe('Specifications component', () => {
  describe('Checking labels', () => {
    it(`Check than ${labels} is contain in the component`, () => {
      const renderResult = render(<Specifications {...defaultProps} />);

      defaultProps.specificationsDetails.forEach((row) => {
        expect(renderResult.getByText(row.label)).toBeInTheDocument();
      });
    });
  });
});
