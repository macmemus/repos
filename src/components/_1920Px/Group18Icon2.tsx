import { memo, SVGProps } from 'react';

const Group18Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 50 48' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={24.0385} cy={24} rx={24.0385} ry={24} fill='#5D71DD' />
    <g filter='url(#filter0_d_17_31)'>
      <ellipse cx={37.0192} cy={35.04} rx={12.9808} ry={12.96} fill='white' />
    </g>
    <defs>
      <filter
        id='filter0_d_17_31'
        x={20.0385}
        y={22.08}
        width={33.9615}
        height={33.92}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix type='matrix' values='0 0 0 0 0.224444 0 0 0 0 0.272708 0 0 0 0 0.533333 0 0 0 0.18 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_17_31' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_17_31' result='shape' />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(Group18Icon2);
export { Memo as Group18Icon2 };
