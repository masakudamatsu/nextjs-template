import React from 'react';
import {render, screen} from '@testing-library/react';

import Section from './Section';

import {section} from 'src/utils/specLayout';
import remify from 'src/utils/remify';

const mockProps = {};

describe('Props', () => {
  test('Parent changes the background color with the backgroundColor prop value', () => {
    const backgroundColor = '#343434';
    render(<Section backgroundColor={backgroundColor} data-testid="section" />);
    expect(screen.getByTestId('section')).toHaveStyle(
      `background-color: ${backgroundColor}`,
    );
  });

  test('Parent changes the font color with the fontColor prop value', () => {
    const fontColor = '#dddddd';
    render(<Section fontColor={fontColor} data-testid="section" />);
    expect(screen.getByTestId('section')).toHaveStyle(`color: ${fontColor}`);
  });

  test('Whitespace changes the height if the betweenParagraphs prop is true', () => {
    render(<Section.Whitespace betweenParagraphs data-testid="whitespace" />);
    expect(screen.getByTestId('whitespace')).toHaveStyle(
      `height: ${remify(section.betweenParagraphs)}`,
    );
  });
});

describe('renders UI correctly:', () => {
  test('Parent', () => {
    const {container} = render(<Section {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        background-color: inherit;
        color: inherit;
        max-width: 33em;
        width: 100%;
      }

      <div>
        <section
          class="c0"
        />
      </div>
    `);
  });
  test('Link', () => {
    const {container} = render(<Section.Link {...mockProps} />);
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
          class="Section__Link-yfzme9-2 c0"
        />
      </div>
    `);
  });
  test('Paragraph', () => {
    const {container} = render(<Section.Paragraph {...mockProps} />);
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

      @media only screen and (min-width:45.5rem) {
        .c0 {
          font-size: 1.0714rem;
        }
      }

      <div>
        <p
          class="Section__Paragraph-yfzme9-1 c0"
        />
      </div>
    `);
  });
  test('Whitespace', () => {
    const {container} = render(<Section.Whitespace {...mockProps} />);
    expect(container).toMatchInlineSnapshot(`
      .c0 {
        height: 1.6453rem;
        width: 100%;
      }

      @media only screen and (min-width:45.5rem) {
        .c0 {
          height: 1.9744rem;
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
