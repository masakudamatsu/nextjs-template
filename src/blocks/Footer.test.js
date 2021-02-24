import React from 'react';
import {render, screen} from '@testing-library/react';

import Footer from './Footer';

import {footer} from 'src/utils/specLayout';
import remify from 'src/utils/remify';

const mockProps = {};

// describe('changes UI with props', () => {
//   test('... if the ... prop is provided', () => {
//     render(<Footer testProp data-testid="Footer" />);
//     expect(screen.getByTestId('Footer')).toHaveStyle(`display: inline-block`);
//   });
// });

describe('renders UI correctly', () => {
  test('Parent', () => {
    const {container} = render(<Footer {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: #018786;
        border-top: 1px solid #000000;
        color: #000000;
        max-width: 33em;
        width: 100%;
      }

      <div>
        <footer
          class="c0"
        />
      </div>
    `);
  });
  test('Link', () => {
    const {container} = render(<Footer.Link {...mockProps} />);
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
          class="Footer__Link-n0a7ft-2 c0"
        />
      </div>
    `);
  });
  test('Paragraph', () => {
    const {container} = render(<Footer.Paragraph {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        text-align: left;
      }

      <div>
        <p
          class="Footer__Paragraph-n0a7ft-1 c0"
        />
      </div>
    `);
  });
  test('Whitespace', () => {
    const {container} = render(<Footer.Whitespace {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.0969rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 1.3163rem;
        }
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
