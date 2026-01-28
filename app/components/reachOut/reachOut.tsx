'use client'

import React from 'react'
import ExternalLink from './externalLink'
import LinkedInIcon from './linkedInIcon'
import GitHubIcon from './gitHubIcon'

const LINKEDIN_URL = 'https://www.linkedin.com/in/ashley-simpson-08217b129/'
const GITHUB_URL = 'https://github.com/ashleysimpson'

export default function ReachOut(): React.ReactElement {
  return (
    <div className="reachOut font-bitter text-accent text-xl -mt-8 mb-6 flex justify-between mx-8 tablet:text-3xl tablet:mt-0 tablet:mx-14 tablet:[grid-area:4/1/5/5] tablet:h-xs:text-lg desktop:text-3xl desktop:mt-0 desktop:ml-0 desktop:mr-14 desktop:[grid-area:4/3/5/5] desktop:h-xs:text-lg">
      <ExternalLink
        href={LINKEDIN_URL}
        text="LinkedIn"
        icon={<LinkedInIcon />}
      />
      <ExternalLink href={GITHUB_URL} text="GitHub" icon={<GitHubIcon />} />
    </div>
  )
}
