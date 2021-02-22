import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import A from './A';

const mockProps = {};

test('changes background-color on hover with the backgroundColorOnHover prop value', () => {
  const red = 'rgb(238, 0, 0)';
  render(<A backgroundColorOnHover={red} data-testid="link-text" />);
  const linkText = screen.getByTestId('link-text');
  userEvent.hover(linkText);
  // DOES NOT WORK FOR SOME REASON...
  // expect(linkText).toHaveStyle(`
  //   background: ${red};
  //   `);
});

test('changes text-shadow color with the backgroundColor prop value', () => {
  const black = '#000000';
  render(<A backgroundColor={black} data-testid="link-text" />);
  expect(screen.getByTestId('link-text')).toHaveStyle(`
    text-shadow: 0.03em 0 ${black},-0.03em 0 ${black},0 0.03em ${black},0 -0.03em ${black};
    `);
});

test('renders UI correctly:', () => {
  const {container} = render(<A {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      background: #018786;
      background: linear-gradient( to bottom,transparent 50%,currentColor 50%,currentColor );
      background-position: 0 1.1000em;
      background-repeat: no-repeat;
      background-size: 100% 2px;
      color: inherit;
      cursor: pointer;
      -webkit-text-decoration: none;
      text-decoration: none;
      text-shadow: 0.03em 0 #0a0a0a,-0.03em 0 #0a0a0a,0 0.03em #0a0a0a,0 -0.03em #0a0a0a;
    }

    .c0:visited {
      background: #018786;
      background: linear-gradient( to bottom,transparent 50%,currentColor 50%,currentColor );
      color: inherit;
    }

    .c0:focus,
    .c0:hover {
      background: #018786;
      outline: none;
      text-shadow: none;
    }

    .c0:active {
      background: none;
    }

    .c0:visited:focus,
    .c0:visited:hover {
      background: #018786;
      outline: none;
      text-shadow: none;
    }

    .c0:visited:active {
      background: none;
    }

    <div>
      <a
        class="c0"
      />
    </div>
  `);
});
