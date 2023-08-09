import { styled, css } from '@mui/material/styles';
import { Button } from '@mui/material';
import colors from '../../util/theme/colors';

const StyledButton = styled(Button)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.3rem;
  background: none;
  color: ${colors.white};
  transition: 0.2s;

  ${({ variant, size, selected, theme }) => {
    const { palette } = theme;
    switch (variant) {
      case 'sidebar':
        if (size === 'lg') {
          return css`
            width: 100%;
            height: 4rem;
            gap: 1.5rem;
            padding: 0 1rem;
            font-weight: 600;

            ${selected && `background: ${palette.primary.main};`}
            ${selected && `&:hover {background: ${palette.primary.main};}`}
          `;
        }
        if (size === 'sm') {
          return css`
            justify-content: center;
            align-items: center;
            min-width: 2.5rem;
            max-width: 2.5rem;
            width: 2.5rem;
            height: 2.5rem;
            padding: 0;
            gap: 0;
            font-size: 0;

            ${selected && `background: ${palette.primary.main};`}
            ${selected && `&:hover {background: ${palette.primary.main};}`}
          `;
        }
        break;

      case 'header':
        return css`
          display: flex;
          justify-content: center;
          width: 2.5rem;
          min-width: 2.5rem;
          max-width: 2.5rem;
          height: 2.5rem;
          background-color: ${colors.blue};
          border-radius: 50%;

          &:hover {
            background-color: ${colors.darkBlue};
          }

          @media (max-width: 550px) {
            width: 2rem;
            min-width: 2rem;
            max-width: 2rem;
            height: 2rem;
            background-color: ${colors.darkestBlue};
          }
        `;
    }
    return ``;
  }}
`;

export { StyledButton };
