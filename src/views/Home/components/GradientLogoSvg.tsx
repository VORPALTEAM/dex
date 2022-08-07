import React from 'react'
import { Svg, SvgProps } from 'vorpaltesttoolkit'

const GradientLogo: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 334 334" {...props}>
      <g filter="url(#filter0_d_1030_2276)">
           <circle cx="167" cy="167" r="80" fill="url(#paint0_radial_1030_2276)"/>
           <path d="M175.48 167C175.453 190.517 172.633 213.948 167.08 236.8C161.472 213.955 158.598 190.524 158.52 167C158.598 143.477 161.472 120.046 167.08 97.2002C172.633 120.052 175.453 143.483 175.48 167Z" fill="black"/>
           <circle cx="178.836" cy="140.68" r="11.68" fill="white"/>
      </g>
      <defs>
       <filter id="filter0_d_1030_2276" x="0" y="0" width="334" height="334" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
             <feFlood floodOpacity="0" result="BackgroundImageFix"/>
             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
             <feOffset/>
             <feGaussianBlur stdDeviation="43.5"/>
             <feComposite in2="hardAlpha" operator="out"/>
             <feColorMatrix type="matrix" values="0 0 0 0 0.341176 0 0 0 0 0.960784 0 0 0 0 0.282353 0 0 0 1 0"/>
             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1030_2276"/>
             <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1030_2276" result="shape"/>
        </filter>
        <radialGradient id="paint0_radial_1030_2276" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.88 66.28) scale(165.64)">
            <stop offset="0.23" stopColor="#FFF883"/>
            <stop offset="0.31" stopColor="#FCF882"/>
            <stop offset="0.38" stopColor="#F2F87E"/>
            <stop offset="0.45" stopColor="#E1F778"/>
            <stop offset="0.5" stopColor="#C9F770"/>
            <stop offset="0.56" stopColor="#AAF765"/>
            <stop offset="0.62" stopColor="#84F658"/>
            <stop offset="0.67" stopColor="#57F548"/>
            <stop offset="0.72" stopColor="#25F436"/>
            <stop offset="0.74" stopColor="#14F430"/>
        </radialGradient>
      </defs>
    </Svg>
  )
}

export default GradientLogo
