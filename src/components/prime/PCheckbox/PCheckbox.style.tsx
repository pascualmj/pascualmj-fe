import styled from 'styled-components';
import { Checkbox } from 'primereact/checkbox';
import { colors } from 'services/theme';

export const PCheckboxStyle = {
  CheckboxWrapper: styled.div`
    display: flex;
    gap: 8px;
  `,
  Checkbox: styled(Checkbox)`
    width: 16px;
    height: 16px;

    .p-checkbox-box {
      width: 16px;
      height: 16px;
      border: 1px solid ${colors.slate.l300};
      border-radius: 4px;

      .p-checkbox-icon {
        font-size: 9px;
      }

      &.p-focus {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${colors.lime.l100}, transparent 60%) !important;
        border-color: ${colors.green.l200} !important;
      }

      &:hover {
        border-color: ${colors.slate.l400} !important;
      }

      &.p-highlight {
        border-color: ${colors.red.l300} !important;
        background-color: ${colors.red.l300} !important;

        &:hover {
          border-color: ${colors.red.l600} !important;
          background-color: ${colors.red.l600} !important;
        }
      }

      &.p-disabled {
        border-color: ${colors.slate.l200} !important;
        background-color: ${colors.slate.l100} !important;
      }
    }

    &.input-invalid {
      .p-checkbox-box {
        border-color: ${colors.red.l300} !important;
        &:hover {
          border-color: ${colors.red.l300} !important;
        }
      }
    }
  `,
};
