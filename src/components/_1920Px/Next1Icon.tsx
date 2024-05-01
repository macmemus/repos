import { memo, SVGProps } from 'react';

const Next1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_17_20)'>
      <path
        d='M7.58637 5.22557L2.96108 0.613071C2.80954 0.462037 2.56419 0.462291 2.4129 0.613853C2.26173 0.765395 2.26212 1.01088 2.41368 1.16203L6.76366 5.50001L2.41352 9.83796C2.26198 9.98913 2.26159 10.2345 2.41274 10.386C2.48858 10.462 2.58794 10.5 2.68729 10.5C2.78639 10.5 2.88536 10.4623 2.96106 10.3868L7.58637 5.77442C7.65936 5.7018 7.70032 5.60297 7.70032 5.50001C7.70032 5.39704 7.65924 5.29833 7.58637 5.22557Z'
        fill='#5D71DD'
      />
    </g>
    <defs>
      <clipPath id='clip0_17_20'>
        <rect width={10} height={10} fill='white' transform='translate(0 0.5)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Next1Icon);
export { Memo as Next1Icon };
