import React from 'react';

export default () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
    <defs>
      <filter id="a" width="183.3%" height="183.3%" x="-41.7%" y="-33.3%" filterUnits="objectBoundingBox">
        <feOffset dy="10" in="SourceAlpha" result="shadowOffsetOuter1"/>
        <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="15"/>
        <feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0.152941176 0 0 0 0 0.0235294118 0 0 0 0 0.0235294118 0 0 0 0.1 0"/>
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
      <path id="b" d="M22 0h40c12.15 0 22 9.85 22 22v26c0 12.15-9.85 22-22 22h-8c-8.818 0-18.15 4.333-28 13V70h-4C9.85 70 0 60.15 0 48V22C0 9.85 9.85 0 22 0z"/>
    </defs>
    <g fill="none" fill-rule="evenodd" filter="url(#a)" transform="translate(30 20)">
      <rect width="120" height="120" fill="#FFF" rx="25"/>
      <g transform="translate(18 24)">
        <mask id="c" fill="#fff">
          <use href="#b"/>
        </mask>
        <use fill="#EC4200" href="#b"/>
        <path fill="#F36B00" d="M10.056 15.85l9.818-7.601-.192 78.356-7.784 1.933c-1.262-.121-1.948-.384-2.057-.79-.11-.406 1.401-4.34 4.531-11.804L-1.114 65.098l-.863-17.902L10.056 15.85z" mask="url(#c)" transform="rotate(-21 8.949 48.393)"/>
        <path fill="#E61E00" d="M53.745-2.65L42.148 73.997l29.727-3.368L86.623 54.33c-.237-23.591-.443-35.645-.618-36.16-.175-.516-2.24-5.657-6.195-15.424L66.21-2.65H53.746z" mask="url(#c)"/>
      </g>
      <path fill="#FFF" d="M41 88h-2a6 6 0 0 1-6-6V42a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v40a6 6 0 0 1-6 6h-3v6h-3v-6z"/>
      <g fill="#FFF" transform="translate(60 40)">
        <g transform="translate(2 16)">
          <rect width="6" height="6" rx="1"/>
          <rect width="6" height="6" y="10" rx="1"/>
          <rect width="6" height="6" y="20" rx="1"/>
          <rect width="6" height="6" x="10" rx="1"/>
          <rect width="6" height="6" x="10" y="10" rx="1"/>
          <rect width="6" height="6" x="10" y="20" rx="1"/>
          <rect width="6" height="6" x="20" rx="1"/>
          <rect width="6" height="6" x="20" y="10" rx="1"/>
          <rect width="6" height="6" x="20" y="20" rx="1"/>
        </g>
        <rect width="30" height="10" rx="1"/>
      </g>
    </g>
  </svg>);