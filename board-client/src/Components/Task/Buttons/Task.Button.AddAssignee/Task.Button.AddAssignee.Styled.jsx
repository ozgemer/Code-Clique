import { Avatar, Badge, css } from '@mui/material';
import { styled } from '@mui/material/styles';
import colors from '../../../../themes/Colors';

const BadgeStyled = styled(Badge)`
  .MuiBadge-badge {
    right: 10px;
    bottom: 5px;
    background-color: ${colors.darkBlue};
    color: ${colors.white};
    box-shadow: 0px 5px 5px -8px white;
  }
`;

const AvatarStyled = styled(Avatar)`
  ${(props) =>
    props.avatarSize === 'big'
      ? css`
          width: 80px;
          height: 80px;
          border: ${colors.white} solid;
        `
      : props.avatarSize === 'small'
      ? css`
          width: 30px;
          height: 30px;
          border: none;
        `
      : css`
          width: 50px;
          height: 50px;
          border: ${colors.white} solid;
        `}
  border: none;
  cursor: pointer;
  box-shadow: 0px 20px 70px rgba(86, 89, 146, 0.1);
`;

export { AvatarStyled, BadgeStyled };
