import { Badge, badgeClasses, styled } from '@mui/material';

const OutlinedBadge = styled((props) => <Badge {...props} />, {
  shouldForwardProp: (prop) => prop !== 'outlineOptions',
})(({ theme, outlineOptions }) => {
  const borderWidth = outlineOptions?.width || 2;
  const borderColor = outlineOptions?.color || theme.vars.palette.background.paper;
  return {
    [`&.${badgeClasses.badge}`]: {
      '&::after': {
        position: 'absolute',
        content: "''",
        top: -borderWidth,
        left: -borderWidth,
        right: -borderWidth,
        bottom: -borderWidth,
        borderWidth: outlineOptions?.width || 2,
        borderColor: borderColor,
        borderStyle: 'solid',
        borderRadius: '50%',
      },
    },
  };
});

export default OutlinedBadge;
