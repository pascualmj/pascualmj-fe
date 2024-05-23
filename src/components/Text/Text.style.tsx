import styled, { css } from 'styled-components';
import { fontSizes, fontWeights, lineHeights, colors, fontFamilies } from 'services/theme';
import { getValueByPathString } from 'utils/valueAccessor';

const textStyleBase = css<{ props: any }>`
  ${({ props }) => css`
    font-family: ${props.family ? (fontFamilies as any)[props.family] : 'inherit'};
    font-size: ${props.size ? (fontSizes as any)[props.size] : 'inherit'};
    line-height: ${props.lineHeight ? (lineHeights as any)[props.lineHeight] : 'inherit'};
    font-weight: ${props.weight ? (fontWeights as any)[props.weight] : 'inherit'};
    color: ${props.color ? getValueByPathString(colors, props.color) : 'inherit'};
    text-align: ${props.align || 'left'};
    ${props.ellipsis
      ? css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `
      : ''}
  `}
`;

export const TextStyle = {
  Span: styled.span`
    ${textStyleBase}
  `,
  P: styled.p`
    ${textStyleBase}
  `,
  H1: styled.h1`
    ${textStyleBase}
  `,
  H2: styled.h2`
    ${textStyleBase}
  `,
  H3: styled.h3`
    ${textStyleBase}
  `,
  H4: styled.h4`
    ${textStyleBase}
  `,
  H5: styled.h5`
    ${textStyleBase}
  `,
  H6: styled.h6`
    ${textStyleBase}
  `,
};
