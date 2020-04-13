import React from 'react';

export default function DiagonalAccent() {
  return (
    <div className="diagonal">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0 0,100, 200,0" fill="currentColor" />
      </svg>
    </div>
  );
}
