import { PAvatar } from 'components/prime/PAvatar/PAvatar';
import styled from 'styled-components';

export const UserAvatarStyle = {
  Avatar: styled(PAvatar)`
    &.custom-size-sm {
      width: 24px;
      height: 24px;
      .p-avatar-text {
        font-size: 11px;
      }
    }
    &.custom-size-md {
      width: 32px;
      height: 32px;
    }
    &.custom-size-lg {
      width: 42px;
      height: 42px;
    }
  `,
};
