import React from 'react';

export default function DiagonalAccent() {
  return (
    <div className="diagonal">
      <svg viewBox="0 0 200 100">
        <polygon points="0,0 0,100, 200,0" fill="currentColor" />
      </svg>
    </div>
  );
}
