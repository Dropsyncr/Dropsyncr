import { avatarClasses } from '@mui/material';
import fallbackAvatarIcon from 'assets/images/avatar/avatar_fallback.webp';

export const Avatar = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.vars.palette.background.elevation4,
      fontWeight: 500,
      lineHeight: 1.2,
    }),
    colorDefault: ({ theme }) => ({
      backgroundColor: theme.vars.palette.primary.main,
    }),
    fallback: {
      background: `url(${fallbackAvatarIcon}) center bottom no-repeat`,
      backgroundSize: 'contain',
      width: '62%',
      height: '100%',
      path: {
        display: 'none',
      },
    },
  },
};

export const AvatarGroup = {
  defaultProps: {},
  styleOverrides: {
    avatar: {
      marginLeft: 0,
      marginRight: -8,
    },
    root: ({ ownerState: { max } }) => ({
      ...[...Array(max)].reduce(
        (result, curr, index) => ({
          ...result,
          [`& > .${avatarClasses.root}:nth-of-type(${index + 1})`]: {
            zIndex: Number(max) - index,
          },
        }),
        {},
      ),
    }),
  },
};
