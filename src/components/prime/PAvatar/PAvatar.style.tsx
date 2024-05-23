import styled from 'styled-components';
import { Avatar } from 'primereact/avatar';
import { colors } from 'services/theme';

export const PAvatarStyle = {
  Avatar: styled(Avatar)`
    background-color: ${colors.red.l300};
    width: 32px;
    height: 32px;
    .p-avatar-text {
      color: ${colors.neutral.l0};
      font-size: 14px;
      text-transform: uppercase;
    }
  `,
};
