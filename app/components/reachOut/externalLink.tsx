'use client'

import React, { ReactNode } from 'react'

interface ExternalLinkProps {
  icon: ReactNode
  href: string
  text: string
}

export default function ExternalLink({
  icon,
  href,
  text,
}: ExternalLinkProps): React.ReactElement {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {text} {icon}
    </a>
  )
}
