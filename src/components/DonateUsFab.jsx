// FloatingActionButton.js

import React, { useEffect, useState } from 'react';
import './Fab.css';

const DonateUsFab = () => {
    const [shouldBounce, setShouldBounce] = useState(true);

  useEffect(() => {
    const bounceTimeout = setTimeout(() => {
      setShouldBounce(false);
    }, 1500);

    return () => clearTimeout(bounceTimeout);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className={`fab-container ${shouldBounce ? 'bounce' : ''}`}>
    <div className="fab-button">    
        <img src="https://yesj.org/assets/images/donate.png" alt="Donate Us" />
      </div>
    </div>
  );
};

export default DonateUsFab;
