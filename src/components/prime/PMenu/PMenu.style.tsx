import styled from 'styled-components';
import { Menu } from 'primereact/menu';
import { colors } from 'services/theme';

export const PMenuStyle = {
  Menu: styled(Menu)`
    box-shadow: 0px 0px 12px 0px color-mix(in srgb, ${colors.neutral.l900}, transparent 80%) !important;
    border-radius: 4px;
    padding: 6px 0;
    min-width: 220px;

    .p-menu-separator {
      margin: 6px 0;
      border-top-color: ${colors.slate.l100};
    }

    .p-menuitem-link {
      padding: 8px 12px;
      min-height: 36px;
      .p-menuitem-text {
        color: ${colors.neutral.l800};
      }
      &:focus {
        box-shadow: inset 0px 0px 0px 2px color-mix(in srgb, ${colors.sky.l500}, transparent 60%);
      }
      &:hover {
        background-color: ${colors.slate.l100} !important;
      }
      &:active {
        background-color: ${colors.slate.l200} !important;
        .p-menuitem-text {
          color: ${colors.neutral.l900} !important;
        }
      }
      &.p-disabled {
        opacity: 0.4;
        cursor: not-allowed !important;
      }
    }

    .p-menuitem.destructive {
      .p-menuitem-link {
        .p-menuitem-text {
          color: ${colors.red.l300};
        }
        &:focus {
          box-shadow: inset 0px 0px 0px 2px color-mix(in srgb, ${colors.red.l300}, transparent 60%);
        }
        &:hover {
          background-color: color-mix(in srgb, ${colors.red.l50}, transparent 60%) !important;
        }
        &:active {
          background-color: color-mix(in srgb, ${colors.red.l50}, transparent 60%) !important;
          .p-menuitem-text {
            color: ${colors.red.l300} !important;
          }
        }
      }
    }
  `,
};
