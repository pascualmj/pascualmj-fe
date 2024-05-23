import styled, { css } from 'styled-components';
import { spaceSizes } from 'services/theme';

export const StackStyle = {
  Stack: styled.div<{ props: any }>`
    ${({ props }) => css`
      display: ${props.inline ? 'inline-flex' : 'flex'};
      flex-direction: ${props.direction || 'column'};
      justify-content: ${props.justify || 'flex-start'};
      align-items: ${props.align || 'stretch'};
      gap: ${props.gap ? (spaceSizes as any)[props.gap] : '0px'};
      flex-wrap: ${props.wrap || 'nowrap'};
      ${props.stretch ? 'height: 100%;' : ''}
      ${props.fitContent ? 'flex: 0 0 fit-content;' : ''}
      ${typeof props.splitAfterIdx == 'number'
        ? css`
        & > :nth-child(${props.splitAfterIdx + 2}) {
          margin-${props.direction?.includes('column') ? 'top' : 'left'}: auto;
        }
      `
        : ''}
    `};
  `,
};
