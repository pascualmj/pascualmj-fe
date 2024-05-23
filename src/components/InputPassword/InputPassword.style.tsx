import styled from 'styled-components';

export const InputPasswordStyle = {
  Container: styled.div`
    position: relative;

    [class^='toggler-'] {
      position: absolute;
      cursor: pointer;
      top: 50%;
      right: 14px;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      svg {
        width: 100%;
        height: 100%;
      }
      &.toggler-hide {
        display: none;
      }
    }

    &.password-visible {
      .toggler-show {
        display: none;
      }
      .toggler-hide {
        display: block;
      }
    }
  `,
};
