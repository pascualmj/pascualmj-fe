import styled, { css } from 'styled-components';

export const ScrollerStyle = {
  Scroller: styled.div<{ props: any }>`
    ${({ props }) => css`
      overflow-${props.axis || 'y'}: overlay;
      min-${props.axis === 'y' ? 'height' : 'width'}: 100%;
    `}
  `,
};
