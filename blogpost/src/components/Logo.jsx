import React from 'react';

function Logo({ width = '100px', src }) {
  return (
    <div>
      <img src={src} alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;