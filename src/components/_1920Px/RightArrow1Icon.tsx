import { memo, SVGProps } from 'react';

const RightArrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_17_34)'>
      <path
        d='M19.5857 9.85082L1.01478 1.2796C0.719071 1.14532 0.366222 1.22532 0.160513 1.4796C-0.0466249 1.73388 -0.0537675 2.09529 0.14337 2.35672L6.25036 10.4994L0.14337 18.642C-0.0537675 18.9035 -0.0466249 19.2663 0.159084 19.5192C0.297652 19.692 0.50479 19.7849 0.714785 19.7849C0.816211 19.7849 0.917637 19.7634 1.01335 19.7191L19.5843 11.1479C19.8386 11.0308 20 10.7779 20 10.4994C20 10.2208 19.8386 9.96796 19.5857 9.85082Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_17_34'>
        <rect width={20} height={20} fill='white' transform='translate(0 0.5)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(RightArrow1Icon);
export { Memo as RightArrow1Icon };
