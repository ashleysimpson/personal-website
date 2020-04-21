import React from 'react';
import ExternalLink from './externalLink';
import LinkedInIcon from './linkedInIcon';
import GitHubIcon from './gitHubIcon';

const LINKEDIN_URL = 'https://www.linkedin.com/in/ashley-simpson-08217b129/';
const GITHUB_URL = 'https://github.com/ashleysimpson';

export default function ReachOut() {
  return (
    <div className="reachOut">
      <ExternalLink
        href={LINKEDIN_URL}
        text="LinkedIn"
        icon={<LinkedInIcon />}
      />
      <ExternalLink href={GITHUB_URL} text="GitHub" icon={<GitHubIcon />} />
    </div>
  );
}
