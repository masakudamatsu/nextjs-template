import React from 'react';
import {render} from '@testing-library/react';

import Img from './Img';

const mockProps = {};

test('renders UI correctly:', () => {
  const {container} = render(<Img {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    .c0 {
      display: block;
      height: auto;
      margin: auto;
      max-width: 100%;
    }

    <div>
      <img
        class="c0"
      />
    </div>
  `);
});
