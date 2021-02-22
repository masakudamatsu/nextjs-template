import React from 'react';
import {render} from '@testing-library/react';

import H1 from './H1';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<H1 {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins',Verdana,sans-serif;
      font-size: 6.25rem;
      font-weight: 100;
      line-height: 1.188;
      padding-bottom: 4.3875rem;
      padding-top: 4.3875rem;
    }

    .c0::before,
    .c0::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c0::before {
      margin-bottom: -0.249em;
    }

    .c0::after {
      margin-top: -0.255em;
    }

    @media only screen and min-width:45.5rem {
      .c0 {
        font-size: 7.5rem;
      }
    }

    <div>
      <h1
        class="c0"
      />
    </div>
  `);
});
