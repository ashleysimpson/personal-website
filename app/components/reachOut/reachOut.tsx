'use client';

import React from 'react';
import ExternalLink from './externalLink';
import LinkedInIcon from './linkedInIcon';
import GitHubIcon from './gitHubIcon';

const LINKEDIN_URL = 'https://www.linkedin.com/in/ashley-simpson-08217b129/';
const GITHUB_URL = 'https://github.com/ashleysimpson';

export default function ReachOut(): React.ReactElement {
  return (
    <div className="font-bitter flex justify-between w-auto mx-8 mb-8 text-accent text-3xl tablet:text-5xl tablet:[grid-area:4/1/5/5] desktop:text-5xl desktop:[grid-area:4/3/5/5]">
      <ExternalLink
        href={LINKEDIN_URL}
        text="LinkedIn"
        icon={<LinkedInIcon />}
      />
      <ExternalLink href={GITHUB_URL} text="GitHub" icon={<GitHubIcon />} />
    </div>
  );
}
