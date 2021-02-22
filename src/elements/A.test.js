import React from 'react';
import {render} from '@testing-library/react';

import A from './A';

const mockProps = {};

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
