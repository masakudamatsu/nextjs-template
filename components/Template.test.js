import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Template from './Template';

const mockProps = {};

// DELETE THIS LINE
describe.skip('delete this line', () => {
  test('renders UI correctly', () => {
    const {container} = render(<Template {...mockProps} />);
    expect(container).toMatchInlineSnapshot();
  });

  test('is accessible', async () => {
    const {container} = render(<Template {...mockProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
}); // DELETE THIS LINE