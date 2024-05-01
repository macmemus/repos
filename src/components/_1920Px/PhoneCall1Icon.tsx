import { memo, SVGProps } from 'react';

const PhoneCall1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_17_24)'>
      <path
        d='M13.619 10.7746L11.6652 8.82085C10.9675 8.12308 9.78126 8.40222 9.50215 9.30928C9.29282 9.9373 8.59506 10.2862 7.96707 10.1466C6.57154 9.79772 4.68757 7.98353 4.33869 6.51822C4.12936 5.89021 4.54802 5.19244 5.17601 4.98314C6.0831 4.70403 6.36221 3.51783 5.66444 2.82007L3.7107 0.866326C3.15249 0.377891 2.31517 0.377891 1.82674 0.866326L0.500982 2.19208C-0.824771 3.58761 0.640535 7.28576 3.92003 10.5653C7.19953 13.8448 10.8977 15.3799 12.2932 13.9843L13.619 12.6586C14.1074 12.1003 14.1074 11.263 13.619 10.7746Z'
        fill='#5D71DD'
      />
    </g>
    <defs>
      <clipPath id='clip0_17_24'>
        <rect width={14} height={14} fill='white' transform='translate(0 0.5)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(PhoneCall1Icon);
export { Memo as PhoneCall1Icon };
