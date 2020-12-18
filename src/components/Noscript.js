import React from 'react';
import PropTypes from 'prop-types';

const Noscript = () => {
  return (
    <noscript>
      For full functionality of this site, it is necessary to enable JavaScript.
      Here are the{' '}
      <a href="https://www.enable-javascript.com/">
        instructions how to enable JavaScript in your web browser
      </a>
      .
    </noscript>
  );
};

Noscript.propTypes = {};

export default Noscript;
