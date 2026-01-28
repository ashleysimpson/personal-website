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
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="text-inherit no-underline hover:text-textHover"
    >
      {text} {icon}
    </a>
  )
}
