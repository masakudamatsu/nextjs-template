import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {axe} from 'jest-axe';

import Noscript from 'src/components/Noscript';

const mockProps = {};

// DELETE THIS LINE
// describe.skip('delete this line', () => {
test('renders UI correctly', () => {
  const {container} = render(<Noscript {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <noscript />
    </div>
  `);
});

test('is accessible', async () => {
  const {container} = render(<Noscript {...mockProps} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
// }); // DELETE THIS LINE
