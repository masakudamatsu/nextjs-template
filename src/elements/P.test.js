import React from 'react';
import {render, screen} from '@testing-library/react';

import P from './P';

const mockProps = {};

test('right-aligns the text if the rightAligned prop is provided', () => {
  render(<P rightAligned {...mockProps} data-testid="paragraph" />);
  expect(screen.getByTestId('paragraph')).toHaveStyle('text-align: right');
});

test('renders UI correctly:', () => {
  const {container} = render(<P {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      font-family: 'Poppins',Verdana,sans-serif;
      font-size: 0.8929rem;
      font-weight: 300;
      line-height: 1.365;
      text-align: left;
    }

    .c0::before,
    .c0::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
    }

    .c0::before {
      margin-bottom: -0.3165em;
    }

    .c0::after {
      margin-top: -0.4195em;
    }

    @media only screen and min-width:45.5rem {
      .c0 {
        font-size: 1.0714rem;
      }
    }

    <div>
      <p
        class="c0"
      />
    </div>
  `);
});
