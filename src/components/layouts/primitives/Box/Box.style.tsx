import styled, { css } from 'styled-components';
import { borderSizes, colors, paddingSizes, radiusSizes } from 'services/theme';
import { getValueByPathString } from 'utils/valueAccessor';
import { Leaves } from 'types/UtilityTypes';

const getPadding = (value?: keyof typeof paddingSizes | (keyof typeof paddingSizes)[]) => {
  if (typeof value === 'string')
    return css`
      padding: ${paddingSizes[value]};
    `;
  if (Array.isArray(value))
    return css`
      padding: ${value.map((p) => paddingSizes[p]).join(' ')};
    `;
  return '';
};

const getBoxShadow = (value?: number) => {
  if (!value) return '';
  return css`
    box-shadow: 0px ${value * 4}px ${value * 6}px 0px
      color-mix(in srgb, ${colors.neutral.l900}, transparent 80%);
  `;
};

const getBorder = (borderWidth?: keyof typeof borderSizes, borderColor?: Leaves<typeof colors>) => {
  if (!borderWidth && !borderColor) return '';
  return css`
    border: ${(borderSizes as any)[borderWidth || 'md']} solid
      ${borderColor ? getValueByPathString(colors, borderColor) : colors.slate.l200};
  `;
};

export const BoxStyle = {
  Box: styled.div<{ props: any }>`
    ${({ props }) => css`
      ${props.radius
        ? css`
            border-radius: ${(radiusSizes as any)[props.radius]};
          `
        : ''}
      ${props.backgroundColor
        ? css`
            background: ${getValueByPathString(colors, props.backgroundColor)};
          `
        : ''}
      ${props.borderWidth || props.borderColor ? getBorder(props.borderWidth, props.borderColor) : ''}
      ${props.padding ? getPadding(props.padding) : ''}
      ${props.elevation ? getBoxShadow(props.elevation) : ''}
      ${props.stretch ? 'height: 100%;' : ''}
      ${props.fitContent ? 'flex: 0 0 fit-content;' : ''}
    `}
  `,
};
