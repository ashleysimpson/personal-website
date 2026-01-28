'use client';

import React from 'react';

export default function Name(): React.ReactElement {
  return (
    <div className="name self-center font-bitter text-textNormal text-2xl mb-8 border-b-2 border-accent tablet:text-4xl tablet:[grid-area:2/2/3/5] tablet:h-md:text-4xl tablet:h-md:border-b-0 tablet:h-sm:text-3xl tablet:h-xs:text-2xl desktop:text-5xl desktop:[grid-area:2/3/3/5] desktop:h-md:text-4xl desktop:h-xs:text-2xl">
      <span>Ashley Simpson</span>
    </div>
  );
}
