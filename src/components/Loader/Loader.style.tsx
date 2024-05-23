import styled, { keyframes } from 'styled-components';
import { colors } from 'services/theme';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderStyle = {
  Container: styled.div`
    width: 40px;
    height: 40px;
    .loader {
      width: 40px;
      height: 40px;
      border: 5px solid ${colors.red.l300};
      border-bottom-color: ${colors.rose.l100};
      border-radius: 50%;
      display: inline-block;
      animation: ${spin} 1s linear infinite;
    }
    &.loader-xs {
      width: 14px;
      height: 14px;
      & > .loader {
        width: 14px;
        height: 14px;
        border-width: 2px;
      }
    }
    &.loader-sm {
      width: 20px;
      height: 20px;
      & > .loader {
        width: 20px;
        height: 20px;
        border-width: 3px;
      }
    }
    &.loader-lg {
      width: 60px;
      height: 60px;
      & > .loader {
        width: 60px;
        height: 60px;
        border-width: 7px;
      }
    }
  `,
};
