import styled, { css } from 'styled-components';
import { InputText } from 'primereact/inputtext';
import { colors } from 'services/theme';

export const PInputTextStyleBase = css`
  width: 100%;
  padding: 0 14px;
  color: ${colors.neutral.l900};
  border-radius: 4px;
  border-color: ${colors.slate.l300};
  &.p-inputtext:enabled:hover {
    border-color: ${colors.slate.l400};
  }
  &.p-inputtext:enabled:focus {
    box-shadow: 0 0 0 3px color-mix(in srgb, ${colors.sky.l500}, transparent 80%);
    border-color: ${colors.sky.l500};
  }
  &.input-invalid:enabled {
    border-color: ${colors.red.l300};
    &:hover {
      border-color: ${colors.red.l300};
    }
    &:focus {
      box-shadow: 0 0 0 3px color-mix(in srgb, ${colors.red.l300}, transparent 60%);
      border-color: ${colors.red.l300};
    }
  }
  &.p-inputtext:disabled {
    box-shadow: none;
    border-color: ${colors.slate.l200};
    background-color: ${colors.slate.l100};
    color: ${colors.slate.l400};
  }
`;

export const PInputTextStyle = {
  InputText: styled(InputText)`
    height: 36px;
    ${PInputTextStyleBase}
  `,
};
