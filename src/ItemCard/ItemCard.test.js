import React from 'react';
import { render } from '@testing-library/react';
import ItemCard from './index';

describe('ItemCard', () => {
  it('renders ok', () => {
    expect(ItemCard).toBeTruthy();
    const { getByText } = render(<ItemCard />);
    expect(getByText('Example Card')).toHaveTextContent('Example Card');
  });
});
