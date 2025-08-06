import { useEffect, useMemo, useState } from 'react';
import { Link, SvgIcon, Typography, typographyClasses } from '@mui/material';
import { useSettingsContext } from 'providers/SettingsProvider';
import { rootPaths } from 'routes/paths';

const Logo = ({ sx, viewBox = '0 0 26 40', showName = true, ...rest }) => {
  const [id, setId] = useState('logo');

  const {
    config: { navColor },
  } = useSettingsContext();

  const color = useMemo(() => {
    return navColor === 'vibrant' ? '#A641FA' : '#20DE99';
  }, [navColor]);

  useEffect(() => {
    setId(`logo-${Math.floor(Math.random() * 1000) + 1}`);
  }, []);

  return (
    <Link
      href={rootPaths.root}
      underline="none"
      sx={{
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          [`& .${typographyClasses.root}`]: {
            backgroundPosition: ({ direction }) => (direction === 'rtl' ? 'right' : 'left'),
          },
        },
      }}
    >
     <SvgIcon
    viewBox="0 0 1024 1024"
    sx={{
      height: 40,
      width: 40,
      ...sx,
    }}
    {...rest}
  >
    <g
      transform="translate(0,1024) scale(0.1,-0.1)"
      fill="currentColor"
      stroke="none"
    >
      <path d="M2148 8266 c-60 -22 -84 -42 -109 -93 l-24 -48 -3 -2984 c-1 -1974 1 -2996 8 -3021 15 -55 50 -101 95 -124 40 -21 42 -21 1505 -24 1547 -3 1602 -2 1865 43 210 36 514 130 581 179 32 25 8 43 -151 117 -178 82 -283 142 -385 217 -77 57 -264 238 -361 350 l-54 63 -990 2 -991 2 -49 25 c-35 19 -55 37 -72 69 l-23 44 0 2051 c0 1380 3 2063 10 2088 6 21 22 51 37 68 53 64 -17 60 1110 60 1127 0 1098 1 1333 -61 471 -126 853 -384 1136 -769 137 -186 268 -464 350 -744 34 -115 35 -117 175 -179 252 -114 450 -267 690 -534 36 -40 70 -73 75 -73 6 0 19 6 30 14 17 13 19 30 23 208 6 365 -35 627 -156 1003 -98 304 -204 524 -362 759 -458 677 -1226 1143 -2091 1270 -224 33 -377 36 -1770 36 -1137 -1 -1402 -3 -1432 -14z" />
      <path d="M4840 7007 c-20 -7 -85 -39 -145 -71 -61 -32 -200 -107 -310 -166 -835 -447 -978 -526 -992 -546 -28 -43 -11 -57 180 -149 100 -49 448 -221 772 -383 559 -278 592 -294 635 -289 33 3 98 34 245 114 110 60 247 134 305 165 383 202 691 365 790 416 121 64 139 83 126 135 -4 19 -21 32 -64 52 -31 15 -370 183 -752 375 -382 191 -708 350 -725 353 -16 3 -46 0 -65 -6z" />
      <path d="M3318 5949 c-17 -9 -18 -60 -18 -832 0 -776 1 -824 19 -862 33 -74 0 -56 866 -480 149 -73 340 -167 424 -209 85 -42 164 -76 176 -76 12 0 30 6 41 14 18 14 19 36 22 844 1 508 -1 840 -7 855 -12 30 -69 61 -706 373 -557 274 -785 384 -794 384 -3 0 -14 -5 -23 -11z" />
      <path d="M6260 5340 c-537 -97 -980 -500 -1134 -1032 -55 -190 -72 -459 -41 -661 35 -230 157 -497 321 -698 30 -36 95 -101 144 -145 235 -204 428 -297 730 -350 129 -23 405 -23 513 0 350 75 705 303 883 567 59 88 53 104 -75 226 -141 134 -157 146 -194 146 -24 0 -38 -8 -62 -38 -58 -74 -190 -207 -250 -252 -80 -61 -220 -128 -325 -155 -122 -32 -356 -32 -485 0 -184 45 -386 170 -504 312 -105 126 -185 301 -211 462 -19 114 -8 363 19 453 46 152 123 285 233 401 119 125 245 203 418 259 74 24 106 29 241 33 227 6 365 -28 536 -134 86 -53 227 -188 258 -247 26 -48 17 -63 -62 -102 -126 -62 -126 -73 10 -242 429 -533 501 -619 523 -627 51 -20 70 -1 187 189 177 289 257 429 257 451 0 46 -29 64 -125 76 -76 10 -94 15 -117 39 -16 15 -28 35 -28 44 0 37 -86 232 -146 332 -117 193 -256 336 -455 469 -161 107 -314 171 -519 216 -139 30 -398 34 -540 8z" />
    </g>
  </SvgIcon>
      {showName && (
        <Typography
          sx={[
            {
              color: 'text.secondary',
              fontWeight: 'medium',
              fontSize: 29.5,
              lineHeight: 1,
              margin: 1,
              marginLeft: 0.625,
              letterSpacing: '-.8px',
            },
            navColor !== 'vibrant' && {
              background: ({ vars, direction }) =>
                direction === 'rtl'
                  ? `linear-gradient(100.06deg, #3385f0 93.03%, #7DB1F5 27.63%, #5A9EF6 49.36%, ${vars.palette.text.secondary} 50.11%, ${vars.palette.text.secondary} 87.87%)`
                  : `linear-gradient(100.06deg, #3385f0 6.97%, #7DB1F5 27.63%, #5A9EF6 49.36%, ${vars.palette.text.secondary} 50.11%, ${vars.palette.text.secondary} 87.87%);`,
              backgroundSize: '240% 100%',
              backgroundPosition: ({ direction }) => (direction === 'rtl' ? 'left' : 'right'),
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              transition: 'background-position .3s cubic-bezier(0.8, 0.63, .5, 1)',
            },
          ]}
        >
          Dropsyncr
        </Typography>
      )}
    </Link>
  );
};

export default Logo;
