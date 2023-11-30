// Divider.js

import React from 'react';
import PropTypes from 'prop-types';
import './Divider.css';

const Divider = ({ color }) => {
  const style = {
    borderColor: color,
  };

  return (
   
    <div className="h-divider">
  <div className="shadow"></div>
  {/* <di className="text">hello</di> */}
</div>
  );
};

Divider.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Divider;
