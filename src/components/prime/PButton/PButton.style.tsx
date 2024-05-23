import styled from 'styled-components';
import { Button } from 'primereact/button';
import { colors } from 'services/theme';
import { Loader } from 'components/Loader/Loader';

export const PButtonStyle = {
  Button: styled(Button)`
    height: 36px;
    min-width: 100px;
    background: ${colors.sky.l500};
    border: none;
    border-radius: 4px;
    padding: 0 16px;
    gap: 8px;

    .p-button-label {
      font-size: 14px;
      line-height: 16px;
      color: ${colors.neutral.l0};
    }

    .button-children {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    &:hover {
      background: ${colors.sky.l600} !important;
    }
    &:focus,
    &:active,
    &:focus-within {
      box-shadow: 0px 0px 0px 3px color-mix(in srgb, ${colors.sky.l500}, transparent 80%);
      background: ${colors.sky.l600} !important;
    }

    &.button-icon {
      padding: 0 !important;
      justify-content: center;
      align-items: center;
      background: transparent;
      height: 28px;
      width: 28px;
      min-width: auto;
      .button-children svg {
        width: 18px;
        height: 18px;
        color: ${colors.slate.l500};
      }
      &:hover {
        background: ${colors.slate.l100} !important;
      }
      &:focus,
      &:active,
      &:focus-within {
        background: ${colors.slate.l200} !important;
        box-shadow: 0px 0px 0px 3px color-mix(in srgb, ${colors.neutral.l200}, transparent 40%);
      }
    }

    &.p-button-small {
      height: 28px;
      padding: 0 12px;
      min-width: 80px;
      font-size: 13px;
      gap: 4px;

      .p-button-label {
        font-size: 13px;
      }

      .button-children {
        gap: 4px;
      }
    }

    &.p-button-large {
      height: 48px;
      padding: 0 12px;
      min-width: 80px;
    }

    &.p-disabled {
      background: ${colors.slate.l200};
      .p-button-label {
        color: ${colors.slate.l400};
      }
    }

    &.p-button-loading {
      display: flex;
      justify-content: center;
      background: ${colors.sky.l600};
      .p-button-label,
      .button-children {
        display: none;
      }
    }

    &.button-variant-secondary {
      background: transparent;
      border: 1px solid ${colors.slate.l200};
      color: ${colors.sky.l500};
      .p-button-label {
        color: ${colors.sky.l500};
      }
      &:hover {
        background: ${colors.sky.l100} !important;
        border-color: transparent;
        color: ${colors.sky.l500};
      }
      &:focus,
      &:active,
      &:focus-within {
        box-shadow: 0px 0px 0px 3px color-mix(in srgb, ${colors.sky.l500}, transparent 90%);
        background: ${colors.sky.l100} !important;
        border-color: transparent;
      }
      &.p-disabled {
        background: transparent;
        border: 1px solid ${colors.slate.l200};
        color: ${colors.slate.l300};
        .p-button-label {
          color: ${colors.slate.l300};
        }
      }
      &.p-button-loading {
        background: ${colors.sky.l100};
        border: none;
      }
    }

    &.button-variant-tertiary {
      background: ${colors.slate.l100};
      color: ${colors.neutral.l800};
      .p-button-label {
        color: ${colors.neutral.l800};
      }
      &:hover {
        background: ${colors.slate.l200} !important;
        color: ${colors.neutral.l800};
      }
      &:focus,
      &:active,
      &:focus-within {
        background: ${colors.slate.l200} !important;
        box-shadow: 0px 0px 0px 3px color-mix(in srgb, ${colors.neutral.l300}, transparent 60%);
      }
      &.p-disabled {
        background: ${colors.slate.l200};
        color: ${colors.slate.l400};
        .p-button-label {
          color: ${colors.slate.l400};
        }
      }
      &.p-button-loading {
        background: ${colors.slate.l200};
      }
    }

    &.button-variant-link {
      height: 16px !important;
      min-width: auto !important;
      padding: 0 !important;
      background: none !important;
      border: none !important;

      .p-button-label {
        color: ${colors.sky.l500};
      }
      &:hover {
        .p-button-label {
          color: ${colors.sky.l600};
          text-decoration: underline;
        }
      }
      &:focus,
      &:active,
      &:focus-within {
        box-shadow: none;
      }
      &.p-disabled {
        .p-button-label {
          color: ${colors.slate.l300} !important;
        }
      }
    }

    &.button-variant-dark {
      background: ${colors.neutral.l900};
      color: ${colors.neutral.l0};
      .p-button-label {
        color: ${colors.neutral.l0};
      }
      &:hover {
        background: ${colors.neutral.l1000} !important;
        color: ${colors.neutral.l0};
      }
      &:focus,
      &:active,
      &:focus-within {
        background: ${colors.neutral.l1000} !important;
        box-shadow: 0px 0px 0px 3px color-mix(in srgb, ${colors.neutral.l1000}, transparent 90%);
      }
      &.p-disabled {
        background: ${colors.slate.l200};
        color: ${colors.slate.l400};
        .p-button-label {
          color: ${colors.slate.l400};
        }
      }
      &.p-button-loading {
        background: ${colors.slate.l200};
      }
    }
  `,
  Spinner: styled(Loader)`
    & > .loader {
      border-color: ${colors.sky.l100};
      border-bottom-color: ${colors.sky.l300};
    }
    .button-variant-secondary & > .loader {
      border-color: ${colors.sky.l200};
      border-bottom-color: ${colors.sky.l400};
    }
    .button-variant-tertiary & > .loader {
      border-color: ${colors.neutral.l0};
      border-bottom-color: ${colors.slate.l400};
    }
    .button-variant-dark & > .loader {
      border-color: ${colors.neutral.l0};
      border-bottom-color: ${colors.slate.l400};
    }
  `,
};
