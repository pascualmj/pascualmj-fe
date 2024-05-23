import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'services/theme';

const textLinkStyleBase = css`
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  text-underline-offset: 2px;
  &.link-text-primary {
    color: ${colors.sky.l600};
    text-decoration: underline;
    &:hover {
      color: ${colors.sky.l800};
    }
  }
  &.link-text-dark {
    color: ${colors.neutral.l800};
    text-decoration: underline;
    &:hover {
      color: ${colors.neutral.l1000};
    }
  }
  &.link-text-invert {
    color: ${colors.emerald.l200};
    text-decoration: underline;
    &:hover {
      color: ${colors.neutral.l0};
    }
  }
`;

export const TextLinkStyle = {
  NativeAnchor: styled.a`
    ${textLinkStyleBase}
  `,
  RouterLink: styled(Link)`
    ${textLinkStyleBase}
  `,
  Disabled: styled.span`
    cursor: not-allowed;
    color: ${colors.neutral.l400};
  `,
};
