import React from 'react';

export default function ExternalLink({ icon, href, text }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {text} {icon}
    </a>
  );
}
