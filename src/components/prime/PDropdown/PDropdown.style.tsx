import styled, { createGlobalStyle } from 'styled-components';
import { Dropdown } from 'primereact/dropdown';
import { colors } from 'services/theme';
import { toSvgUrl } from 'utils/toSvgUrl';
import { Icon } from 'components/Icon/Icon';

export const PDropdownStyle = {
  Dropdown: styled(Dropdown)`
    width: 100%;
    border-radius: 4px;

    .p-dropdown-label {
      height: 34px;
      padding: 0 14px;
      display: flex;
      align-items: center;
      color: ${colors.neutral.l900};
      &.p-placeholder {
        color: ${colors.slate.l400};
      }
    }

    .p-dropdown-trigger {
      &::before {
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        background-color: ${colors.slate.l400};
        mask-image: url(${toSvgUrl(<Icon icon="chevronDown" />)});
        mask-repeat: no-repeat;
        mask-size: 100% auto;
      }
      .p-dropdown-trigger-icon {
        display: none;
      }
    }

    &:hover {
      border-color: ${colors.slate.l300} !important;
    }

    &.p-focus {
      box-shadow: 0 0 0 3px color-mix(in srgb, ${colors.sky.l500}, transparent 80%) !important;
      border-color: ${colors.sky.l500} !important;
    }

    &.dropdown-invalid {
      border-color: ${colors.red.l300} !important;
      &:hover {
        border-color: ${colors.red.l300} !important;
      }
      &.p-focus {
        box-shadow: 0 0 0 3px color-mix(in srgb, ${colors.red.l300}, transparent 60%) !important;
        border-color: ${colors.red.l300} !important;
      }
    }

    &.p-disabled {
      box-shadow: none !important;
      border-color: ${colors.slate.l200} !important;
      background-color: ${colors.slate.l100};
      .p-dropdown-label {
        color: ${colors.slate.l400};
      }
    }
  `,
  CustomValueTemplate: styled.p`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${colors.neutral.l900};

    .p-placeholder > & {
      color: ${colors.slate.l400};
    }

    .p-disabled > .p-dropdown-label > & {
      color: ${colors.slate.l400};
    }
  `,
  DropdownGlobalStyles: createGlobalStyle`
    .p-dropdown-panel {
      box-shadow: 0px 0px 12px 0px color-mix(in srgb, ${colors.neutral.l900}, transparent 80%) !important;

      .p-dropdown-items {
        padding: 6px 0;

        .p-dropdown-item {
          padding: 0 14px !important;
          min-height: 32px;
          display: flex;
          align-items: center;
          color: ${colors.neutral.l800};
          &.p-highlight {
            background-color: ${colors.sky.l50} !important;
            color: ${colors.sky.l600}
          }
          &:hover {
            background-color: ${colors.slate.l100} !important;
            color: ${colors.neutral.l900};
          }
        }
      }
    }
  `,
};
