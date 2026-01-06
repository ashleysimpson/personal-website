'use client';

import React from 'react';
import Image from 'next/image';

export default function ProfileImage(): React.ReactElement {
  return (
    <div className="image">
      <Image
        src="/ashleysimpson.png"
        alt="Website Author Image"
        width={600}
        height={600}
        priority
        style={{
          objectFit: 'contain',
          clipPath: 'circle(50%)',
          height: '65%',
          width: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
}
