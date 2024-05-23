import styled from 'styled-components';
import { TabMenu } from 'primereact/tabmenu';
import { colors } from 'services/theme';

export const PTabMenuStyle = {
  TabMenu: styled(TabMenu)`
    .p-tabmenu-nav {
      background: none !important;
      border: none !important;

      .p-tabmenuitem {
        .p-menuitem-link {
          background: none !important;
          border: none !important;
          padding: 10px !important;
          min-height: 44px !important;
          height: auto !important;
          font-weight: 400;
          border-radius: 0px;
          color: ${colors.slate.l400};
          border-bottom: 2px solid transparent !important;
          margin: 0 !important;
          box-shadow: none !important;

          &:hover {
            text-decoration: none;
            color: ${colors.neutral.l900};
            border-bottom-color: ${colors.slate.l200} !important;
          }
        }

        &.p-highlight .p-menuitem-link {
          color: ${colors.red.l300} !important;
          border-bottom-color: ${colors.red.l300} !important;
        }
      }
    }
  `,
};
