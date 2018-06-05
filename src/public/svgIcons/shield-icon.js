import React from 'react';

export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="72"
    height="72"
    viewBox="0 0 72 72">
    <defs>
      <path id="a" d="M0 1v72h71.999V1z"/>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(0 -1)">
        <mask id="b" fill="#fff">
          <path d="M0 1v72h71.999V1z"/>
        </mask>
        <path fill="#F4F5F8" d="M36 1C55.88 1 72 17.116 72 37S55.88 73 36 73C16.115 73 0 56.883 0 37S16.115 1 36 1" mask="url(#b)"/>
      </g>
      <path fill="#32B800" d="M40.578 49.665L35.5 52.5l-5.08-2.835c-5.51-3.076-8.92-8.864-8.92-15.139V23.974s0-3.473 14-3.473c13.125 0 14 3.473 14 3.473v10.552c0 6.275-3.409 12.063-8.92 15.14"/>
      <path fill="#FFF" d="M33.224 33.953l1.79 1.789a1.612 1.612 0 0 1 0 2.274 1.61 1.61 0 0 1-2.273 0l-1.79-1.79a1.607 1.607 0 1 1 2.273-2.273"/>
      <path fill="#FFF" d="M40.019 33.245l-4.772 4.772a1.6 1.6 0 0 1-2.265-2.262l4.773-4.773a1.601 1.601 0 0 1 2.264 2.263"/>
    </g>
  </svg>
);