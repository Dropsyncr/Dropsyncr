import { breadcrumbsClasses, linkClasses, svgIconClasses } from '@mui/material';

const Breadcrumbs = {
  defaultProps: {
    variant: 'body2',
    fontWeight: 500,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${breadcrumbsClasses.ol}`]: {
        [`& .${linkClasses.root}`]: {
          color: theme.vars.palette.primary.main,
        },
        button: {
          backgroundColor: theme.vars.palette.background.elevation2,
          '&:hover': {
            backgroundColor: theme.vars.palette.background.elevation3,
          },
          [`& .${svgIconClasses.root}`]: {
            fill: theme.vars.palette.chGrey[700],
          },
        },
      },
    }),
    separator: {
      fontSize: 16,
      fontWeight: 400,
    },
  },
};

export default Breadcrumbs;
