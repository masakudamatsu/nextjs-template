import React from 'react';
import {render} from '@testing-library/react';

import TemplateBlock from './TemplateBlock';

const mockProps = {};

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<TemplateBlock {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="TemplateBlock-sc-1uislth-0"
        />
      </div>
    `);
  });
});
