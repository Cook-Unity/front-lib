import * as React from 'react';
import { render } from '@testing-library/react';

import defaultPropsMock from "../../mocks/mealdetail.json";
import Specifications from './Specifications';


const defaultProps = {
  label: defaultPropsMock.mealDetail.specificationsDetails.map((detail, i) => detail.label)
};

describe('Specifications component',  () => {

  describe('Checking label', () => {

    it(`Check than ${defaultProps.label} is contain in the component`, () => {
      const renderResult = render(
        <Specifications
          {...defaultProps}
        />
      );

      expect(renderResult.queryByText(defaultProps.label)).toBeInTheDocument();
    });
  });
});


