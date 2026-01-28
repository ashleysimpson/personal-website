'use client';

import React from 'react';

export default function AboutMe(): React.ReactElement {
  return (
    <div className="aboutMe font-opensans text-base text-textNormal mx-8 tablet:text-lg tablet:m-14 tablet:[grid-area:3/1/4/3] tablet:h-md:text-sm tablet:h-sm:text-xs tablet:h-xs:text-xs desktop:text-2xl desktop:m-14 desktop:[grid-area:3/1/4/3] desktop:h-md:text-lg desktop:h-xs:text-xs">
      <p>
        I&apos;m a full stack developer currently living in Vancouver, Canada. Feel
        free to reach out on LinkedIn if you want to connect. Also, you can
        check out my GitHub profile to see any personal projects I am currently
        working on.
      </p>
    </div>
  );
}
