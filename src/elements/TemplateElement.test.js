import React from 'react';
import {render} from '@testing-library/react';

import TemplateElement from './TemplateElement';

const mockProps = {};

test('renders UI correctly', () => {
  const {container} = render(<TemplateElement {...mockProps} />);
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="TemplateElement-uvuhvl-0"
      />
    </div>
  `);
});
